import { SortOrder } from "../../util/SortOrder";

export type FellowshipOrderByInput = {
  name?: SortOrder;
  amount?: SortOrder;
  status?: SortOrder;
  appliedDate?: SortOrder;
  awardDate?: SortOrder;
  duration?: SortOrder;
  datafileId?: SortOrder;
  short?: SortOrder;
  application_id?: SortOrder;
  id?: SortOrder;
};
