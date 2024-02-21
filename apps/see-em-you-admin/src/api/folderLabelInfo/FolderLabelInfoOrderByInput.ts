import { SortOrder } from "../../util/SortOrder";

export type FolderLabelInfoOrderByInput = {
  periodId?: SortOrder;
  lastRanTime?: SortOrder;
  lastLabelColumn?: SortOrder;
  lastLabelRow?: SortOrder;
  id?: SortOrder;
};
