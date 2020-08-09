import { DataProviderAbstract } from "./data-provider-abstract";
import { promises } from "fs";
import { Store } from "../types/store";
import { DistPaths } from "../config/paths";

export class DataProviderJson implements DataProviderAbstract {
  public async saveMultipleStores(stores: Store[]): Promise<void> {
    const filePath = DistPaths.KALININGRAD;
    try {
      await promises.writeFile(filePath, JSON.stringify(stores, undefined, 2), "utf8");
    } catch (e) {
      console.error(`Failed to save multiple stores to ${filePath}`);
    }
  }
}
