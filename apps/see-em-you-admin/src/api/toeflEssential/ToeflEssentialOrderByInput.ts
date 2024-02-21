import { SortOrder } from "../../util/SortOrder";

export type ToeflEssentialOrderByInput = {
  testEmail?: SortOrder;
  applicationId?: SortOrder;
  testdate?: SortOrder;
  listeningscore?: SortOrder;
  readingscore?: SortOrder;
  writingscore?: SortOrder;
  speakingscore?: SortOrder;
  overallscore?: SortOrder;
  url?: SortOrder;
  scorereceived?: SortOrder;
  datafileId?: SortOrder;
  listeningscoremb?: SortOrder;
  readingscoremb?: SortOrder;
  writingscoremb?: SortOrder;
  speakingscoremb?: SortOrder;
  overallscoremb?: SortOrder;
  id?: SortOrder;
};
