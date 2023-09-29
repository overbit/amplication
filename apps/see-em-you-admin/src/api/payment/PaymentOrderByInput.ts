import { SortOrder } from "../../util/SortOrder";

export type PaymentOrderByInput = {
  application_id?: SortOrder;
  id?: SortOrder;
  lastModTime?: SortOrder;
  lastModUserId?: SortOrder;
  paymentAmount?: SortOrder;
  paymentId?: SortOrder;
  paymentIntentDate?: SortOrder;
  payment_status?: SortOrder;
  paymentType?: SortOrder;
  paymentVoucherId?: SortOrder;
};
