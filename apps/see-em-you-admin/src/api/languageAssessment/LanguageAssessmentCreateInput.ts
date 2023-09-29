export type LanguageAssessmentCreateInput = {
  applicationId: number;
  competencyEvidence?: string | null;
  language: string;
  listening?: number | null;
  nativeSpeaker?: number | null;
  reading: number;
  speaking: number;
  studyLevel?: number | null;
  writing: number;
  yearsStudy?: number | null;
};
