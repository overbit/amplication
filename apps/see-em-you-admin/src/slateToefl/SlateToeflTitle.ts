import { SlateToefl as TSlateToefl } from "../api/slateToefl/SlateToefl";

export const SLATETOEFL_TITLE_FIELD = "prefix";

export const SlateToeflTitle = (record: TSlateToefl): string => {
  return record.prefix?.toString() || String(record.id);
};
