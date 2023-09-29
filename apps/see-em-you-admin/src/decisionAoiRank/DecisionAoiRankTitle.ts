import { DecisionAoiRank as TDecisionAoiRank } from "../api/decisionAoiRank/DecisionAoiRank";

export const DECISIONAOIRANK_TITLE_FIELD = "decision";

export const DecisionAoiRankTitle = (record: TDecisionAoiRank): string => {
  return record.decision?.toString() || String(record.id);
};
