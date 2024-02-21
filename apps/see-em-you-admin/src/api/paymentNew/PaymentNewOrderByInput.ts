import { SortOrder } from "../../util/SortOrder";

export type PaymentNewOrderByInput = {
  applicationId?: SortOrder;
  paymentType?: SortOrder;
  paymentAmount?: SortOrder;
  paymentIntentDate?: SortOrder;
  payment_status?: SortOrder;
  lastModTime?: SortOrder;
  lastModUserId?: SortOrder;
  id?: SortOrder;
};
