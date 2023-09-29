import { SortOrder } from "../../util/SortOrder";

export type FolderLabelInfoOrderByInput = {
  id?: SortOrder;
  lastLabelColumn?: SortOrder;
  lastLabelRow?: SortOrder;
  lastRanTime?: SortOrder;
  periodId?: SortOrder;
};
