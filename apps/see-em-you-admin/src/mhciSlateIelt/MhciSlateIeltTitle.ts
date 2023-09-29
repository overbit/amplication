import { MhciSlateIelt as TMhciSlateIelt } from "../api/mhciSlateIelt/MhciSlateIelt";

export const MHCISLATEIELT_TITLE_FIELD = "first";

export const MhciSlateIeltTitle = (record: TMhciSlateIelt): string => {
  return record.first?.toString() || String(record.id);
};
