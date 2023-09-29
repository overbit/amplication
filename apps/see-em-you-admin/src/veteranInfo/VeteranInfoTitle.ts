import { VeteranInfo as TVeteranInfo } from "../api/veteranInfo/VeteranInfo";

export const VETERANINFO_TITLE_FIELD = "branch";

export const VeteranInfoTitle = (record: TVeteranInfo): string => {
  return record.branch?.toString() || String(record.id);
};
