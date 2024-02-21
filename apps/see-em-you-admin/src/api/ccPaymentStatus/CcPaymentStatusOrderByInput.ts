import { SortOrder } from "../../util/SortOrder";

export type CcPaymentStatusOrderByInput = {
  statusDate?: SortOrder;
  authTotal?: SortOrder;
  settleTotal?: SortOrder;
  creditTotal?: SortOrder;
  id?: SortOrder;
};
