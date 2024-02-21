import { SlateOrgsAll as TSlateOrgsAll } from "../api/slateOrgsAll/SlateOrgsAll";

export const SLATEORGSALL_TITLE_FIELD = "localName";

export const SlateOrgsAllTitle = (record: TSlateOrgsAll): string => {
  return record.localName?.toString() || String(record.id);
};
