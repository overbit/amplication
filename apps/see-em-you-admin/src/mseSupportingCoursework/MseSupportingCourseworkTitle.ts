import { MseSupportingCoursework as TMseSupportingCoursework } from "../api/mseSupportingCoursework/MseSupportingCoursework";

export const MSESUPPORTINGCOURSEWORK_TITLE_FIELD = "dmCourseName";

export const MseSupportingCourseworkTitle = (
  record: TMseSupportingCoursework
): string => {
  return record.dmCourseName?.toString() || String(record.id);
};
