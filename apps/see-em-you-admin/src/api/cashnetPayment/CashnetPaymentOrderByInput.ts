import { SortOrder } from "../../util/SortOrder";

export type CashnetPaymentOrderByInput = {
  amount?: SortOrder;
  applicantEmail?: SortOrder;
  applicantName?: SortOrder;
  app_id?: SortOrder;
  id?: SortOrder;
  merchant?: SortOrder;
  status?: SortOrder;
  transactionId?: SortOrder;
  transactionTime?: SortOrder;
  transactionType?: SortOrder;
};
