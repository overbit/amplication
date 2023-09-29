import { ToeflItpPlus as TToeflItpPlus } from "../api/toeflItpPlus/ToeflItpPlus";

export const TOEFLITPPLUS_TITLE_FIELD = "testEmail";

export const ToeflItpPlusTitle = (record: TToeflItpPlus): string => {
  return record.testEmail?.toString() || String(record.id);
};
