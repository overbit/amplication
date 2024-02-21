import { SortOrder } from "../../util/SortOrder";

export type LuApplicationAppreqOrderByInput = {
  reqId?: SortOrder;
  lastModified?: SortOrder;
  completed?: SortOrder;
  application_id?: SortOrder;
  id?: SortOrder;
};
