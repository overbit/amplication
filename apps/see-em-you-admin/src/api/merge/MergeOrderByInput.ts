import { SortOrder } from "../../util/SortOrder";

export type MergeOrderByInput = {
  mergeDate?: SortOrder;
  applicationId?: SortOrder;
  merged?: SortOrder;
  errorField?: SortOrder;
  message?: SortOrder;
  id?: SortOrder;
};
