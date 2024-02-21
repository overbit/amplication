import { SlateEmploy as TSlateEmploy } from "../api/slateEmploy/SlateEmploy";

export const SLATEEMPLOY_TITLE_FIELD = "prefix";

export const SlateEmployTitle = (record: TSlateEmploy): string => {
  return record.prefix?.toString() || String(record.id);
};
