export type ToeflItpPlusCreateInput = {
  applicationId: number;
  testdate?: Date | null;
  listeningscore?: number | null;
  readingscore?: number | null;
  writingscore?: number | null;
  overallscore?: number | null;
  url?: string | null;
  scorereceived?: number | null;
  datafileId?: number | null;
  testEmail?: string | null;
};
