import { Store } from "../types/store";

export abstract class DataProviderAbstract {
  public abstract saveMultipleStores(store: Store[]): Promise<void>;
}
