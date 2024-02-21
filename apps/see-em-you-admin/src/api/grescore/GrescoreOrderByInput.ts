import { SortOrder } from "../../util/SortOrder";

export type GrescoreOrderByInput = {
  applicationId?: SortOrder;
  testdate?: SortOrder;
  verbalscore?: SortOrder;
  verbalpercentile?: SortOrder;
  quantitativescore?: SortOrder;
  quantitativepercentile?: SortOrder;
  analyticalscore?: SortOrder;
  analyticalpercentile?: SortOrder;
  analyticalwritingscore?: SortOrder;
  analyticalwritingpercentile?: SortOrder;
  scorereceived?: SortOrder;
  datafileId?: SortOrder;
  athome?: SortOrder;
  greEmail?: SortOrder;
  id?: SortOrder;
};
