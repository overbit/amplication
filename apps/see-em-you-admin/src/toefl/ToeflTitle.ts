import { Toefl as TToefl } from "../api/toefl/Toefl";

export const TOEFL_TITLE_FIELD = "toeflEmail";

export const ToeflTitle = (record: TToefl): string => {
  return record.toeflEmail?.toString() || String(record.id);
};
