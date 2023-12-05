import { MlSupportingCoursework as TMlSupportingCoursework } from "../api/mlSupportingCoursework/MlSupportingCoursework";

export const MLSUPPORTINGCOURSEWORK_TITLE_FIELD = "introCourse2Grade";

export const MlSupportingCourseworkTitle = (
  record: TMlSupportingCoursework
): string => {
  return record.introCourse2Grade?.toString() || String(record.id);
};
