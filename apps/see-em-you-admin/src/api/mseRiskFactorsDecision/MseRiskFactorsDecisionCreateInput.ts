export type MseRiskFactorsDecisionCreateInput = {
  experience: number;
  applicationId: number;
  programId: number;
  language: number;
  academic: number;
  other: number;
  otherText?: string | null;
};
