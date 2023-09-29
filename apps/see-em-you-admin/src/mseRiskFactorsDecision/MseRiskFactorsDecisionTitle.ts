import { MseRiskFactorsDecision as TMseRiskFactorsDecision } from "../api/mseRiskFactorsDecision/MseRiskFactorsDecision";

export const MSERISKFACTORSDECISION_TITLE_FIELD = "otherText";

export const MseRiskFactorsDecisionTitle = (
  record: TMseRiskFactorsDecision
): string => {
  return record.otherText?.toString() || String(record.id);
};
