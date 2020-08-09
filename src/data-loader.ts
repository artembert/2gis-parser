import { chromium, LaunchOptions } from "playwright";
import { ElementHandle, Page, Response } from "playwright/index";
import { DataResponse, RawStore } from "./types/data-response";
import { categories } from "../src-data/categories";
import { DataProviderJson } from "./data-provider/data-provider-json";
import { Store } from "./types/store";

const browserConfig: LaunchOptions = {
  headless: false,
  devtools: true,
  args: [`--window-size=1229,891`, `--window-position=0,0`],
};

const dataProvider = new DataProviderJson();
(async () => {
  const browser = await chromium.launch(browserConfig);
  const page = await browser.newPage();
  page.on("response", (res: Response) => {
    if (filterResponses(res)) {
      handleResponse(res);
    }
  });
  await page.goto(categories[0]);
  await toggleRetail(page);
})();

function filterResponses(res: Response): boolean {
  return res.request().url().includes("catalog.api.2gis.ru/3.0/items?");
}

async function handleResponse(res: Response): Promise<void> {
  const dataResponse: DataResponse = JSON.parse((await res.body()).toString("utf8"));
  console.log("Got stores: ", getTotalStoresQuantity(dataResponse));
  try {
    const stores: Store[] = getStoresFromResponse(dataResponse);
    await dataProvider.saveMultipleStores(stores);
  } catch (e) {
    console.error(`Error`, e);
  }
}

function getStoresFromResponse(res: DataResponse): Store[] {
  return res.result.items.map(clearStoreData);
}

function getTotalStoresQuantity(res: DataResponse): number {
  return res.result.total;
}

async function toggleRetail(page: Page): Promise<void> {
  const retailBlock = await page.$("css=label[title=Розница]");
  await retailBlock.click();
}

async function getNextPageLink(page: Page): Promise<ElementHandle<HTMLOrSVGElement>> {
  const controlButtonsSection = await page.$(
    'css=div[style="width:552px"]' + '>> css=div[style="position:relative;z-index:0;height:100%"]' + ">> css=._5i4ljs",
  );
  const button = await controlButtonsSection.$("div:last-child");
  if ((await button.getAttribute("class")) === "_1fbvw2b4") {
    console.log("Button has found");
    await button.scrollIntoViewIfNeeded();
    return button;
  }
  console.log("No buttons found");
  return null;
}

function clearStoreData(store: RawStore): Store {
  return {
    address_name: store.address_name,
    adm_div: store.adm_div,
    id: store.id,
    name: store.name,
    name_ex: store.name_ex,
    org: store.org,
    point: store.point,
    region_id: store.region_id,
    rubrics: store.rubrics,
    stat: store.stat,
  };
}
