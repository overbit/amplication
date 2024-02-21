import { SortOrder } from "../../util/SortOrder";

export type VeteranInfoOrderByInput = {
  userId?: SortOrder;
  status?: SortOrder;
  statusEnroll?: SortOrder;
  branch?: SortOrder;
  startdate?: SortOrder;
  enddate?: SortOrder;
  discharge?: SortOrder;
  id?: SortOrder;
};
