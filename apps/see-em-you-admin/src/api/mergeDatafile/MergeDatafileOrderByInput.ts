import { SortOrder } from "../../util/SortOrder";

export type MergeDatafileOrderByInput = {
  mergeId?: SortOrder;
  datafileinfoId?: SortOrder;
  converted?: SortOrder;
  convertError?: SortOrder;
  convertMessage?: SortOrder;
  mergeFilename?: SortOrder;
  merged?: SortOrder;
  mergeError?: SortOrder;
  mergeMessage?: SortOrder;
  id?: SortOrder;
};
