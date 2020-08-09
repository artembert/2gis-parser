import { chromium, LaunchOptions } from "playwright";
import { Page, Response } from "playwright/index";
import { DataResponse } from "./types/data-response";
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
  return [
    {
      name: "n",
      value: "v",
    },
    {
      name: "n1",
      value: "v2",
    },
  ];
}

function getTotalStoresQuantity(res: DataResponse): number {
  return res.result.total;
}

async function toggleRetail(page: Page): Promise<void> {
  const retailBlock = await page.$("css=label[title=Розница]");
  await retailBlock.click();
}
