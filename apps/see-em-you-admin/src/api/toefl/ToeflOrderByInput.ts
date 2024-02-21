import { SortOrder } from "../../util/SortOrder";

export type ToeflOrderByInput = {
  applicationId?: SortOrder;
  testdate?: SortOrder;
  section1?: SortOrder;
  section2?: SortOrder;
  section3?: SortOrder;
  essay?: SortOrder;
  total?: SortOrder;
  scorereceived?: SortOrder;
  typeField?: SortOrder;
  datafileId?: SortOrder;
  section1mb?: SortOrder;
  section2mb?: SortOrder;
  section3mb?: SortOrder;
  essaymb?: SortOrder;
  totalmb?: SortOrder;
  toeflEmail?: SortOrder;
  toeflPaperEmail?: SortOrder;
  id?: SortOrder;
};
