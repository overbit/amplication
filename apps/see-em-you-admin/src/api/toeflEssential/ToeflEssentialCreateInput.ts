export type ToeflEssentialCreateInput = {
  testEmail?: string | null;
  applicationId: number;
  testdate?: Date | null;
  listeningscore?: number | null;
  readingscore?: number | null;
  writingscore?: number | null;
  speakingscore?: number | null;
  overallscore?: number | null;
  url?: string | null;
  scorereceived?: number | null;
  datafileId?: number | null;
  listeningscoremb?: number | null;
  readingscoremb?: number | null;
  writingscoremb?: number | null;
  speakingscoremb?: number | null;
  overallscoremb?: number | null;
};
