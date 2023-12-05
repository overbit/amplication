import { SortOrder } from "../../util/SortOrder";

export type CcTransactionSummaryOrderByInput = {
  authAmount?: SortOrder;
  authCode?: SortOrder;
  authMessage?: SortOrder;
  ccId?: SortOrder;
  creditAmount?: SortOrder;
  date?: SortOrder;
  id?: SortOrder;
  paymentId?: SortOrder;
  reportDate?: SortOrder;
  settleAmount?: SortOrder;
  settleCode?: SortOrder;
  settleMessage?: SortOrder;
  time?: SortOrder;
};
