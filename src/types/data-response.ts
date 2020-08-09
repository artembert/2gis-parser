export interface DataResponse {
  meta: Meta;
  result: Result;
}

export interface Meta {
  api_version: string;
  code: number;
  issue_date: string;
}

export interface Result {
  context_rubrics: ContextRubric[];
  filters: Filters;
  items: RawStore[];
  request_type: string;
  search_attributes: SearchAttributes;
  search_type: number;
  total: number;
  widgets: Widgets;
}

export interface ContextRubric {
  caption: string;
  group: number;
  id: string;
  name: string;
  short_id: number;
}

export interface Filters {
  attributes: Attribute[];
  rubrics: CityElement[];
  spatial: Spatial;
}

export interface Attribute {
  tag: string;
  type?: string;
  label?: string;
}

export interface CityElement {
  count: number;
  id: string;
  name: string;
}

export interface Spatial {
  cities: CityElement[];
  districts: District[];
}

export interface District {
  city_id: string;
  id: string;
  name: string;
}

export interface RawStore {
  address: Address;
  address_comment?: string;
  address_name: string;
  adm_div: AdmDiv[];
  ads?: Ads;
  context: Context;
  external_content: ExternalContent[];
  flags?: ItemFlags;
  has_apartments_info: boolean;
  has_goods: boolean;
  has_payments: boolean;
  has_pinned_goods: boolean;
  has_realty: boolean;
  id: string;
  is_promoted: boolean;
  links: Links;
  locale: string;
  name: string;
  name_ex: NameEx;
  org: Org;
  point: Point;
  region_id: string;
  reviews: Reviews;
  rubrics: ItemRubric[];
  schedule: Schedule;
  segment_id: string;
  stat: ItemStat;
  timezone_offset: number;
  type: string;
  floors?: Floors;
  full_name?: string;
  geometry?: ItemGeometry;
  group?: Group[];
  purpose_name?: string;
  building_name?: string;
}

export interface Address {
  building_id: string;
  components: Component[];
  postcode: string;
  building_name?: string;
}

export interface Component {
  number: string;
  street: string;
  street_id: string;
  type: string;
}

export interface AdmDiv {
  id: string;
  name: string;
  type: string;
  city_alias?: string;
  flags?: AdmDivFlags;
  is_default?: boolean;
}

export interface AdmDivFlags {
  is_default: boolean;
  is_district_area_center: boolean;
  is_region_center: boolean;
}

export interface Ads {
  article: string;
  options: Options;
  text: string;
  article_warning?: string;
  link?: Link;
  text_warning?: string;
  warning?: string;
}

export interface Link {
  text: string;
  value: string;
}

export interface Options {
  logo: Logo;
  actions: OptionsAction[];
  images: Image[];
  color: string;
  discount?: boolean;
}

export interface OptionsAction {
  caption: string;
  name: string;
  platforms: string[];
  type: string;
  value: string;
}

export interface Image {
  url: string;
}

export interface Logo {
  img_url: string;
}

export interface Context {}

export interface ExternalContent {
  count: number;
  main_photo_url: string;
  subtype: string;
  type: string;
}

export interface ItemFlags {
  photos: boolean;
}

export interface Floors {
  ground_count: number;
}

export interface ItemGeometry {
  centroid: string;
  selection: string;
}

export interface Group {
  id: string;
  type: string;
}

export interface Links {
  database_entrances: Entrance[];
  entrances: Entrance[];
  nearest_parking: NearestParking[];
  nearest_stations: NearestStation[];
  branches?: Branches;
  providers?: Branches;
  servicing?: Servicing;
}

export interface Branches {
  count: number;
}

export interface Entrance {
  geometry: DatabaseEntranceGeometry;
  id: string;
  is_primary: boolean;
  is_visible_on_map: boolean;
}

export interface DatabaseEntranceGeometry {
  normals: string[];
  points: string[];
  vectors: string[];
}

export interface NearestParking {
  id: string;
}

export interface NearestStation {
  distance: number;
  id: string;
  name: string;
  route_types: string[];
}

export interface Servicing {
  count: number;
  items: ServicingItem[];
}

export interface ServicingItem {
  additional_info: string;
  contacts?: Contact[];
  id: string;
  name: string;
  org_id: string;
}

export interface Contact {
  text: string;
  type: string;
  value: string;
}

export interface NameEx {
  extension: string;
  primary: string;
}

export interface Org {
  branch_count: number;
  id: string;
  name: string;
}

export interface Point {
  lat: number;
  lon: number;
}

export interface Reviews {
  general_rating: number;
  general_review_count: number;
  is_reviewable: boolean;
  is_reviewable_on_flamp: boolean;
  items: ReviewsItem[];
  org_rating: number;
  org_review_count: number;
  rating?: number;
  review_count?: number;
}

export interface ReviewsItem {
  is_reviewable: boolean;
  tag: string;
  rating?: number;
  review_count?: number;
}

export interface ItemRubric {
  alias: string;
  id: string;
  kind: string;
  name: string;
  parent_id: string;
  short_id: number;
}

export interface Schedule {
  Fri: Fri;
  Mon: Fri;
  Sat: Fri;
  Sun: Fri;
  Thu: Fri;
  Tue: Fri;
  Wed: Fri;
  comment?: string;
}

export interface Fri {
  working_hours: WorkingHour[];
}

export interface WorkingHour {
  from: string;
  to: string;
}

export interface ItemStat {
  adst: number;
  is_advertised: boolean;
  match_type: number;
  rubr: string;
  source_type: number;
}

export interface SearchAttributes {
  advertisers: Advertiser[];
  context_rubrics: string[];
  dgis_output_type: number;
  dgis_project_id: string;
  dgis_search_type: number;
  drag_bound: DragBound[];
  geo_restriction: boolean;
  has_geo_restriction: boolean;
  is_auto_open_best_result: boolean;
  is_confident_best_result: boolean;
  is_nearby_requested: boolean;
  is_partial: boolean;
  is_remote_requested: boolean;
  out_viewport: DragBound[];
  stat: SearchAttributesStat;
}

export interface Advertiser {
  org: string;
  rubr: string;
}

export interface DragBound {
  latitude: number;
  longitude: number;
}

export interface SearchAttributesStat {
  adst: number;
  lang: string;
}

export interface Widgets {
  actions: WidgetsAction[];
  main: Main[];
}

export interface WidgetsAction {
  expanding: Context;
  items: Array<ActionItem[]>;
  widget: string;
}

export interface ActionItem {
  text: string;
  type?: string;
  values: string[];
}

export interface Main {
  caption?: string;
  default?: Default;
  items?: Array<ActionItem[]>;
  tag?: string;
  widget: string;
  first_week_day?: string;
  labels?: Labels;
  time_format?: string;
  expanding?: Context;
}

export interface Default {
  text: string;
}

export interface Labels {
  alltime: string;
  fri: string;
  mon: string;
  now: string;
  sat: string;
  specified: string;
  sun: string;
  thu: string;
  tue: string;
  wed: string;
}
