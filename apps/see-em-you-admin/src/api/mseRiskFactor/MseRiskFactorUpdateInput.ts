export type MseRiskFactorUpdateInput = {
  applicationId?: number;
  reviewerId?: number;
  language?: number;
  experience?: number;
  academic?: number;
  other?: number;
  otherText?: string | null;
};
