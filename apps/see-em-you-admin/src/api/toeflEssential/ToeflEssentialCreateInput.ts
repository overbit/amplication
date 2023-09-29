export type ToeflEssentialCreateInput = {
  applicationId: number;
  datafileId?: number | null;
  listeningscore?: number | null;
  listeningscoremb?: number | null;
  overallscore?: number | null;
  overallscoremb?: number | null;
  readingscore?: number | null;
  readingscoremb?: number | null;
  scorereceived?: number | null;
  speakingscore?: number | null;
  speakingscoremb?: number | null;
  testdate?: Date | null;
  testEmail?: string | null;
  url?: string | null;
  writingscore?: number | null;
  writingscoremb?: number | null;
};
