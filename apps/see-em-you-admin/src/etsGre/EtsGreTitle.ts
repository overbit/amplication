import { EtsGre as TEtsGre } from "../api/etsGre/EtsGre";

export const ETSGRE_TITLE_FIELD = "countryName";

export const EtsGreTitle = (record: TEtsGre): string => {
  return record.countryName?.toString() || String(record.id);
};
