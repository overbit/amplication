import { MitsSlateIelt as TMitsSlateIelt } from "../api/mitsSlateIelt/MitsSlateIelt";

export const MITSSLATEIELT_TITLE_FIELD = "first";

export const MitsSlateIeltTitle = (record: TMitsSlateIelt): string => {
  return record.first?.toString() || String(record.id);
};
