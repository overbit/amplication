import { SlateSuppinfo as TSlateSuppinfo } from "../api/slateSuppinfo/SlateSuppinfo";

export const SLATESUPPINFO_TITLE_FIELD = "fellowship10Name";

export const SlateSuppinfoTitle = (record: TSlateSuppinfo): string => {
  return record.fellowship10Name?.toString() || String(record.id);
};
