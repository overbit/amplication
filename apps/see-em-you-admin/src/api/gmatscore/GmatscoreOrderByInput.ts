import { SortOrder } from "../../util/SortOrder";

export type GmatscoreOrderByInput = {
  scorereceived?: SortOrder;
  testdate?: SortOrder;
  verbalscore?: SortOrder;
  verbalpercentile?: SortOrder;
  quantitativescore?: SortOrder;
  quantitativepercentile?: SortOrder;
  totalscore?: SortOrder;
  totalpercentile?: SortOrder;
  analyticalwritingscore?: SortOrder;
  analyticalwritingpercentile?: SortOrder;
  datafileId?: SortOrder;
  application_id?: SortOrder;
  id?: SortOrder;
};
