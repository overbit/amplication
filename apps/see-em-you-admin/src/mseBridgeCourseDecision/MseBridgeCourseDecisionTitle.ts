import { MseBridgeCourseDecision as TMseBridgeCourseDecision } from "../api/mseBridgeCourseDecision/MseBridgeCourseDecision";

export const MSEBRIDGECOURSEDECISION_TITLE_FIELD = "id";

export const MseBridgeCourseDecisionTitle = (
  record: TMseBridgeCourseDecision
): string => {
  return record.id?.toString() || String(record.id);
};
