import { MseLetterRecsDecision as TMseLetterRecsDecision } from "../api/mseLetterRecsDecision/MseLetterRecsDecision";

export const MSELETTERRECSDECISION_TITLE_FIELD = "id";

export const MseLetterRecsDecisionTitle = (
  record: TMseLetterRecsDecision
): string => {
  return record.id?.toString() || String(record.id);
};
