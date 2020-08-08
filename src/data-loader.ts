import { chromium, LaunchOptions } from "playwright";
import { GlobalCounter } from "./global-counter";
import { Page, Response } from "playwright/index";
import { DataResponse } from "./types/data-response";
import { categories } from "../src-data/categories";

const browserConfig: LaunchOptions = {
  headless: false,
  devtools: false,
  args: [`--window-size=1229,891`, `--window-position=281,182`],
};
const url = "https://2gis.ru/kaliningrad/";
(async () => {
  const browser = await chromium.launch(browserConfig);
  const page = await browser.newPage();
  page.on("response", (res: Response) => {
    if (filterResponses(res)) {
      console.log("valid response");
      handleResponse(res);
    }
  });
  // while (hasNextPageLink) {
  await page.goto(categories[0]);
  await toggleRetail(page);
  // }
  // await browser.close();
})();

function filterResponses(res: Response): boolean {
  return res.request().url().includes("catalog.api.2gis.ru/3.0/items?");
}

async function handleResponse(res: Response): Promise<void> {
  const dataResponse: DataResponse = JSON.parse((await res.body()).toString("utf8"));
  console.log(getTotalStoresQuantity(dataResponse));
}

function getStoresFromResponse(): void {}

function getTotalStoresQuantity(res: DataResponse): number {
  return res.result.total;
}

async function toggleRetail(page: Page): Promise<void> {
  const retailBlock = await page.$("css=label[title=Розница]");
  await retailBlock.click();
}
