import { AdmDiv, ItemRubric, ItemStat, NameEx, Org, Point } from "./data-response";

export interface Store {
  address_name: string;
  adm_div: AdmDiv[];
  id: string;
  name: string;
  name_ex: NameEx;
  org: Org;
  point: Point;
  region_id: string;
  rubrics: ItemRubric[];
  stat: ItemStat;
}
