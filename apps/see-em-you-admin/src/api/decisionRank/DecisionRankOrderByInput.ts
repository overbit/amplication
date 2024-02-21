import { SortOrder } from "../../util/SortOrder";

export type DecisionRankOrderByInput = {
  departmentId?: SortOrder;
  periodId?: SortOrder;
  decision?: SortOrder;
  timestamp?: SortOrder;
  luUsersUsertypesId?: SortOrder;
  ranking?: SortOrder;
  id?: SortOrder;
};
