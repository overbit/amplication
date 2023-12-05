import { SortOrder } from "../../util/SortOrder";

export type MergeApplicationOrderByInput = {
  baseConvertError?: SortOrder;
  baseConvertMessage?: SortOrder;
  baseWriteError?: SortOrder;
  baseWriteMessage?: SortOrder;
  id?: SortOrder;
  searchTextWriteError?: SortOrder;
  searchTextWriteMessage?: SortOrder;
};
