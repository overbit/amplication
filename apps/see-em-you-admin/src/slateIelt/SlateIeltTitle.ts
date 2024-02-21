import { SlateIelt as TSlateIelt } from "../api/slateIelt/SlateIelt";

export const SLATEIELT_TITLE_FIELD = "prefix";

export const SlateIeltTitle = (record: TSlateIelt): string => {
  return record.prefix?.toString() || String(record.id);
};
