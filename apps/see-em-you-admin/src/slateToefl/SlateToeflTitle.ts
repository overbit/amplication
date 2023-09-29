import { SlateToefl as TSlateToefl } from "../api/slateToefl/SlateToefl";

export const SLATETOEFL_TITLE_FIELD = "first";

export const SlateToeflTitle = (record: TSlateToefl): string => {
  return record.first?.toString() || String(record.id);
};
