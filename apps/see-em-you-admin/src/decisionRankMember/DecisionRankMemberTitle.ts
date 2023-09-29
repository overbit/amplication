import { DecisionRankMember as TDecisionRankMember } from "../api/decisionRankMember/DecisionRankMember";

export const DECISIONRANKMEMBER_TITLE_FIELD = "decision";

export const DecisionRankMemberTitle = (
  record: TDecisionRankMember
): string => {
  return record.decision?.toString() || String(record.id);
};
