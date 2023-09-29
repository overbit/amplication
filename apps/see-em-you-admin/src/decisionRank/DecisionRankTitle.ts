import { DecisionRank as TDecisionRank } from "../api/decisionRank/DecisionRank";

export const DECISIONRANK_TITLE_FIELD = "decision";

export const DecisionRankTitle = (record: TDecisionRank): string => {
  return record.decision?.toString() || String(record.id);
};
