import { Toefl as TToefl } from "../api/toefl/Toefl";

export const TOEFL_TITLE_FIELD = "typeField";

export const ToeflTitle = (record: TToefl): string => {
  return record.typeField?.toString() || String(record.id);
};
