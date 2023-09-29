export type IniDisciplinaryActionCreateInput = {
  applicationId: number;
  retraction: number;
  retractionDescription?: string | null;
  sanction: number;
  sanctionDescription?: string | null;
};
