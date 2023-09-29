import { SortOrder } from "../../util/SortOrder";

export type VoucherOrderByInput = {
  active?: SortOrder;
  allowMultiple?: SortOrder;
  code?: SortOrder;
  id?: SortOrder;
  prettyCode?: SortOrder;
  prog?: SortOrder;
};
