import { MseSupportingCoursework as TMseSupportingCoursework } from "../api/mseSupportingCoursework/MseSupportingCoursework";

export const MSESUPPORTINGCOURSEWORK_TITLE_FIELD = "algCourseName";

export const MseSupportingCourseworkTitle = (
  record: TMseSupportingCoursework
): string => {
  return record.algCourseName?.toString() || String(record.id);
};
