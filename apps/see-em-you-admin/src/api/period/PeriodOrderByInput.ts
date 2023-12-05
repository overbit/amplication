import { SortOrder } from "../../util/SortOrder";

export type PeriodOrderByInput = {
  description?: SortOrder;
  endDate?: SortOrder;
  id?: SortOrder;
  parentPeriodId?: SortOrder;
  periodTypeId?: SortOrder;
  startDate?: SortOrder;
  unitId?: SortOrder;
};
