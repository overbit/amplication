import { SortOrder } from "../../util/SortOrder";

export type MergeDatafileOrderByInput = {
  converted?: SortOrder;
  convertError?: SortOrder;
  convertMessage?: SortOrder;
  datafileinfoId?: SortOrder;
  id?: SortOrder;
  merged?: SortOrder;
  mergeError?: SortOrder;
  mergeFilename?: SortOrder;
  mergeId?: SortOrder;
  mergeMessage?: SortOrder;
};
