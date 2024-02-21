import { SortOrder } from "../../util/SortOrder";

export type PeriodOrderByInput = {
  unitId?: SortOrder;
  periodTypeId?: SortOrder;
  description?: SortOrder;
  startDate?: SortOrder;
  endDate?: SortOrder;
  parentPeriodId?: SortOrder;
  id?: SortOrder;
};
