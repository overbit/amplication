import { SortOrder } from "../../util/SortOrder";

export type CashnetPaymentCopyOrderByInput = {
  appId?: SortOrder;
  transactionId?: SortOrder;
  applicantName?: SortOrder;
  applicantEmail?: SortOrder;
  merchant?: SortOrder;
  status?: SortOrder;
  transactionTime?: SortOrder;
  transactionType?: SortOrder;
  amount?: SortOrder;
  id?: SortOrder;
};
