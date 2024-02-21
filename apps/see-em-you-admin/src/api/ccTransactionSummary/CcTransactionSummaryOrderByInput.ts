import { SortOrder } from "../../util/SortOrder";

export type CcTransactionSummaryOrderByInput = {
  ccId?: SortOrder;
  date?: SortOrder;
  time?: SortOrder;
  reportDate?: SortOrder;
  paymentId?: SortOrder;
  authCode?: SortOrder;
  authMessage?: SortOrder;
  settleCode?: SortOrder;
  settleMessage?: SortOrder;
  authAmount?: SortOrder;
  settleAmount?: SortOrder;
  creditAmount?: SortOrder;
  id?: SortOrder;
};
