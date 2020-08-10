import { flattenSavedData } from "./make-flat-data-structure";
import { convertToCsv } from "./to-csv";

(async () => {
  await flattenSavedData();
  await convertToCsv();
})();
