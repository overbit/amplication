import { SlateSuppinfo as TSlateSuppinfo } from "../api/slateSuppinfo/SlateSuppinfo";

export const SLATESUPPINFO_TITLE_FIELD = "fellowship1Name";

export const SlateSuppinfoTitle = (record: TSlateSuppinfo): string => {
  return record.fellowship1Name?.toString() || String(record.id);
};
