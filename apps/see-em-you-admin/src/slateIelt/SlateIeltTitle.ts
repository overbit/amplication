import { SlateIelt as TSlateIelt } from "../api/slateIelt/SlateIelt";

export const SLATEIELT_TITLE_FIELD = "first";

export const SlateIeltTitle = (record: TSlateIelt): string => {
  return record.first?.toString() || String(record.id);
};
