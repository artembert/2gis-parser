import * as jsonexport from "jsonexport/dist";
import { promises } from "fs";
import { DistPaths } from "./config/paths";

export async function convertToCsv(): Promise<void> {
  let savedData;
  try {
    savedData = JSON.parse(await promises.readFile(DistPaths.KALIINIGRAD_FLAT(), "utf8"));
  } catch (e) {
    console.error(`Filed to read data from ${DistPaths.KALIINIGRAD_FLAT()}\n`, e);
  }
  let csv;
  try {
    csv = await jsonexport(savedData, {});
  } catch (e) {
    console.error(e);
  }

  try {
    await promises.writeFile(DistPaths.KALIINIGRAD_CSV(), csv, "utf8");
    console.log(`Flat data saved to ${DistPaths.KALIINIGRAD_CSV()}`);
  } catch (e) {
    console.error(`Filed to save data from ${DistPaths.KALIINIGRAD_CSV()}\n`, e);
  }
}
