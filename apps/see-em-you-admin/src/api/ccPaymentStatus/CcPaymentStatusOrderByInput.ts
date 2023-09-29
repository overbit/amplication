import { SortOrder } from "../../util/SortOrder";

export type CcPaymentStatusOrderByInput = {
  authTotal?: SortOrder;
  creditTotal?: SortOrder;
  id?: SortOrder;
  settleTotal?: SortOrder;
  statusDate?: SortOrder;
};
