import { SortOrder } from "../../util/SortOrder";

export type CohortOrderByInput = {
  cohortId?: SortOrder;
  startDate?: SortOrder;
  closed?: SortOrder;
  periodId?: SortOrder;
  id?: SortOrder;
};
