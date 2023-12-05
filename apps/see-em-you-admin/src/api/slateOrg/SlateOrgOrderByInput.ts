import { SortOrder } from "../../util/SortOrder";

export type SlateOrgOrderByInput = {
  category?: SortOrder;
  city?: SortOrder;
  country?: SortOrder;
  id?: SortOrder;
  localName?: SortOrder;
  numActiveApplicationsWithSchoolKeyInDatabase?: SortOrder;
  numRecordsWithSchoolKeyInDatabase?: SortOrder;
  orgType?: SortOrder;
  postal?: SortOrder;
  region?: SortOrder;
  sharedName?: SortOrder;
  status?: SortOrder;
  street?: SortOrder;
};
