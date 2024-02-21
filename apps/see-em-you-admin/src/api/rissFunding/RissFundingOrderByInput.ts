import { SortOrder } from "../../util/SortOrder";

export type RissFundingOrderByInput = {
  externalFunding?: SortOrder;
  externalSource?: SortOrder;
  externalAmount?: SortOrder;
  reuScholarship?: SortOrder;
  directFunding?: SortOrder;
  application_id?: SortOrder;
  id?: SortOrder;
};
