export type IniDisciplinaryActionCreateInput = {
  applicationId: number;
  sanction: number;
  sanctionDescription?: string | null;
  retraction: number;
  retractionDescription?: string | null;
};
