import { EtsGre as TEtsGre } from "../api/etsGre/EtsGre";

export const ETSGRE_TITLE_FIELD = "instName";

export const EtsGreTitle = (record: TEtsGre): string => {
  return record.instName?.toString() || String(record.id);
};
