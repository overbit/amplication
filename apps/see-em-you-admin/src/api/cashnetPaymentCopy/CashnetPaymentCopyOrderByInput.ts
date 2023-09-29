import { SortOrder } from "../../util/SortOrder";

export type CashnetPaymentCopyOrderByInput = {
  amount?: SortOrder;
  appId?: SortOrder;
  applicantEmail?: SortOrder;
  applicantName?: SortOrder;
  id?: SortOrder;
  merchant?: SortOrder;
  status?: SortOrder;
  transactionId?: SortOrder;
  transactionTime?: SortOrder;
  transactionType?: SortOrder;
};
