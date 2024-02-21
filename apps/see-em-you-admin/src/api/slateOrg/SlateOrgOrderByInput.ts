import { SortOrder } from "../../util/SortOrder";

export type SlateOrgOrderByInput = {
  status?: SortOrder;
  localName?: SortOrder;
  sharedName?: SortOrder;
  street?: SortOrder;
  city?: SortOrder;
  region?: SortOrder;
  postal?: SortOrder;
  country?: SortOrder;
  category?: SortOrder;
  orgType?: SortOrder;
  numRecordsWithSchoolKeyInDatabase?: SortOrder;
  numActiveApplicationsWithSchoolKeyInDatabase?: SortOrder;
  id?: SortOrder;
};
