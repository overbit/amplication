import { MitsSlateToefl as TMitsSlateToefl } from "../api/mitsSlateToefl/MitsSlateToefl";

export const MITSSLATETOEFL_TITLE_FIELD = "first";

export const MitsSlateToeflTitle = (record: TMitsSlateToefl): string => {
  return record.first?.toString() || String(record.id);
};
