import { SortOrder } from "../../util/SortOrder";

export type CashnetPaymentOrderByInput = {
  transactionId?: SortOrder;
  applicantName?: SortOrder;
  applicantEmail?: SortOrder;
  merchant?: SortOrder;
  status?: SortOrder;
  transactionTime?: SortOrder;
  transactionType?: SortOrder;
  amount?: SortOrder;
  app_id?: SortOrder;
  id?: SortOrder;
};
