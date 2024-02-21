import { SortOrder } from "../../util/SortOrder";

export type VoucherApplicationErrorOrderByInput = {
  appId?: SortOrder;
  code?: SortOrder;
  vaId?: SortOrder;
  errMsg?: SortOrder;
  allowMultiple?: SortOrder;
  id?: SortOrder;
};
