import { ToeflEssential as TToeflEssential } from "../api/toeflEssential/ToeflEssential";

export const TOEFLESSENTIAL_TITLE_FIELD = "testEmail";

export const ToeflEssentialTitle = (record: TToeflEssential): string => {
  return record.testEmail?.toString() || String(record.id);
};
