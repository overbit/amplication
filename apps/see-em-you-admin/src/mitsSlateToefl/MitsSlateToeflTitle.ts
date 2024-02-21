import { MitsSlateToefl as TMitsSlateToefl } from "../api/mitsSlateToefl/MitsSlateToefl";

export const MITSSLATETOEFL_TITLE_FIELD = "prefix";

export const MitsSlateToeflTitle = (record: TMitsSlateToefl): string => {
  return record.prefix?.toString() || String(record.id);
};
