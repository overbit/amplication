export type LanguageAssessment = {
  applicationId: number;
  competencyEvidence: string | null;
  id: number;
  language: string;
  listening: number | null;
  nativeSpeaker: number | null;
  reading: number;
  speaking: number;
  studyLevel: number | null;
  writing: number;
  yearsStudy: number | null;
};
