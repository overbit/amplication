import { LanguageAssessment as TLanguageAssessment } from "../api/languageAssessment/LanguageAssessment";

export const LANGUAGEASSESSMENT_TITLE_FIELD = "competencyEvidence";

export const LanguageAssessmentTitle = (
  record: TLanguageAssessment
): string => {
  return record.competencyEvidence?.toString() || String(record.id);
};
