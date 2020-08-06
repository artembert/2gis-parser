import { chromium, LaunchOptions } from "playwright";

const browserConfig: LaunchOptions = {
  headless: false,
  devtools: false,
  args: [`--window-size=1229,891`, `--window-position=281,182`],
};
const url = "https://2gis.ru/kaliningrad/";
(async () => {
  const browser = await chromium.launch(browserConfig);
  const page = await browser.newPage();
  await page.goto(url);
  // Create pages, interact with UI elements, assert values
  // await browser.close();
})();
