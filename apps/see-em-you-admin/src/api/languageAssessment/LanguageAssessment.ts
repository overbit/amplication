export type LanguageAssessment = {
  applicationId: number;
  language: string;
  listening: number | null;
  speaking: number;
  reading: number;
  writing: number;
  nativeSpeaker: number | null;
  yearsStudy: number | null;
  studyLevel: number | null;
  competencyEvidence: string | null;
  id: number;
};
