import { DecisionAoiRankMember as TDecisionAoiRankMember } from "../api/decisionAoiRankMember/DecisionAoiRankMember";

export const DECISIONAOIRANKMEMBER_TITLE_FIELD = "decision";

export const DecisionAoiRankMemberTitle = (
  record: TDecisionAoiRankMember
): string => {
  return record.decision?.toString() || String(record.id);
};
