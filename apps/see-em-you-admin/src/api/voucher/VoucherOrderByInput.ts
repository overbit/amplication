import { SortOrder } from "../../util/SortOrder";

export type VoucherOrderByInput = {
  code?: SortOrder;
  active?: SortOrder;
  allowMultiple?: SortOrder;
  prettyCode?: SortOrder;
  prog?: SortOrder;
  id?: SortOrder;
};
