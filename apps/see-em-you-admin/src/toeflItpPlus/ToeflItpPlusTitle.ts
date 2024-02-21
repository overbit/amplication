import { ToeflItpPlus as TToeflItpPlus } from "../api/toeflItpPlus/ToeflItpPlus";

export const TOEFLITPPLUS_TITLE_FIELD = "url";

export const ToeflItpPlusTitle = (record: TToeflItpPlus): string => {
  return record.url?.toString() || String(record.id);
};
