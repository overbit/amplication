import { SlateMaterial as TSlateMaterial } from "../api/slateMaterial/SlateMaterial";

export const SLATEMATERIAL_TITLE_FIELD = "fileName";

export const SlateMaterialTitle = (record: TSlateMaterial): string => {
  return record.fileName?.toString() || String(record.id);
};
