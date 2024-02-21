import { MhciSlateIelt as TMhciSlateIelt } from "../api/mhciSlateIelt/MhciSlateIelt";

export const MHCISLATEIELT_TITLE_FIELD = "prefix";

export const MhciSlateIeltTitle = (record: TMhciSlateIelt): string => {
  return record.prefix?.toString() || String(record.id);
};
