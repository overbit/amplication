import { SortOrder } from "../../util/SortOrder";

export type JiravoteOrderByInput = {
  created?: SortOrder;
  updatedAt?: SortOrder;
  jiraName?: SortOrder;
  user?: SortOrder;
  id?: SortOrder;
};
