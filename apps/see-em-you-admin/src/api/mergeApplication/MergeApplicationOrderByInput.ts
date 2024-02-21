import { SortOrder } from "../../util/SortOrder";

export type MergeApplicationOrderByInput = {
  baseWriteError?: SortOrder;
  baseWriteMessage?: SortOrder;
  baseConvertError?: SortOrder;
  baseConvertMessage?: SortOrder;
  searchTextWriteError?: SortOrder;
  searchTextWriteMessage?: SortOrder;
  id?: SortOrder;
};
