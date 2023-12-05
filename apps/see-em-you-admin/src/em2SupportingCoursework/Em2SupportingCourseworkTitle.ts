import { Em2SupportingCoursework as TEm2SupportingCoursework } from "../api/em2SupportingCoursework/Em2SupportingCoursework";

export const EM2SUPPORTINGCOURSEWORK_TITLE_FIELD = "dataStructuresTitle";

export const Em2SupportingCourseworkTitle = (
  record: TEm2SupportingCoursework
): string => {
  return record.dataStructuresTitle?.toString() || String(record.id);
};
