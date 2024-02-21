import { VeteranInfo as TVeteranInfo } from "../api/veteranInfo/VeteranInfo";

export const VETERANINFO_TITLE_FIELD = "status";

export const VeteranInfoTitle = (record: TVeteranInfo): string => {
  return record.status?.toString() || String(record.id);
};
