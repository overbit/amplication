import { MlSupportingCoursework as TMlSupportingCoursework } from "../api/mlSupportingCoursework/MlSupportingCoursework";

export const MLSUPPORTINGCOURSEWORK_TITLE_FIELD = "introCourseNum";

export const MlSupportingCourseworkTitle = (
  record: TMlSupportingCoursework
): string => {
  return record.introCourseNum?.toString() || String(record.id);
};
