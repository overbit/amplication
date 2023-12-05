import { LanguageAssessmentStudyLevel as TLanguageAssessmentStudyLevel } from "../api/languageAssessmentStudyLevel/LanguageAssessmentStudyLevel";

export const LANGUAGEASSESSMENTSTUDYLEVEL_TITLE_FIELD = "value";

export const LanguageAssessmentStudyLevelTitle = (
  record: TLanguageAssessmentStudyLevel
): string => {
  return record.value?.toString() || String(record.id);
};
