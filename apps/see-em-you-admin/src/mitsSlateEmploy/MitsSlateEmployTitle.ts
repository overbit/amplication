import { MitsSlateEmploy as TMitsSlateEmploy } from "../api/mitsSlateEmploy/MitsSlateEmploy";

export const MITSSLATEEMPLOY_TITLE_FIELD = "first";

export const MitsSlateEmployTitle = (record: TMitsSlateEmploy): string => {
  return record.first?.toString() || String(record.id);
};
