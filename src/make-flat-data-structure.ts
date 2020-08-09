import { Store } from "./types/store";
import { FlatStore } from "./types/flat-store";
import { AdmDiv } from "./types/data-response";



export function flatTheStoreData(store: Store): FlatStore {
  return {
    address_name: store.address_name,
    id: store.id,
    name_primary: store.name_ex.primary,
    name_extension: store.name_ex.extension,
    org: store.org.branch_count > 1 ? store.org.name : "",
    lat: store.point.lat,
    lon: store.point.lon,
    region_id: store.region_id,
    district_area: getDistrictArea(store.adm_div),
    city: getCity(store.adm_div),
    settlement: getSettlement(store.adm_div),
    category: getCategory(store.stat.rubr),
  };
}

function getDistrictArea(adm: AdmDiv[]): string {
  return adm.find((level) => level.type === "district_area").name;
}

function getCity(adm: AdmDiv[]): string {
  return adm.find((level) => level.type === "city")?.name || "";
}

function getSettlement(adm: AdmDiv[]): string {
  return adm.find((level) => level.type === "settlement")?.name || "";
}

function getCategory(rubricId: string): string {
  const rubrics = {
    "350": "Супермаркеты",
    "12127": "Гипермаркеты",
    "373": "Продовольственные магазины",
    "363": "Кондитерские изделия",
    "366": "Рыба / Морепродукты",
    "562": "Мясо / Полуфабрикаты",
  };
  return rubrics[rubricId] || "";
}
