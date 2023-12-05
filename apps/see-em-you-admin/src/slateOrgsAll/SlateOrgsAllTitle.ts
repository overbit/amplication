import { SlateOrgsAll as TSlateOrgsAll } from "../api/slateOrgsAll/SlateOrgsAll";

export const SLATEORGSALL_TITLE_FIELD = "awName";

export const SlateOrgsAllTitle = (record: TSlateOrgsAll): string => {
  return record.awName?.toString() || String(record.id);
};
