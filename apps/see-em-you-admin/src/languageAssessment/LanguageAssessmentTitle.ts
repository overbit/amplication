import { LanguageAssessment as TLanguageAssessment } from "../api/languageAssessment/LanguageAssessment";

export const LANGUAGEASSESSMENT_TITLE_FIELD = "language";

export const LanguageAssessmentTitle = (
  record: TLanguageAssessment
): string => {
  return record.language?.toString() || String(record.id);
};
