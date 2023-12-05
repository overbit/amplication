import { SortOrder } from "../../util/SortOrder";

export type CohortOrderByInput = {
  closed?: SortOrder;
  cohortId?: SortOrder;
  id?: SortOrder;
  periodId?: SortOrder;
  startDate?: SortOrder;
};
