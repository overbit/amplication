import { SortOrder } from "../../util/SortOrder";

export type VeteranInfoOrderByInput = {
  branch?: SortOrder;
  discharge?: SortOrder;
  enddate?: SortOrder;
  id?: SortOrder;
  startdate?: SortOrder;
  status?: SortOrder;
  statusEnroll?: SortOrder;
  userId?: SortOrder;
};
