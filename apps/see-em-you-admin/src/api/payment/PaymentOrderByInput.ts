import { SortOrder } from "../../util/SortOrder";

export type PaymentOrderByInput = {
  paymentId?: SortOrder;
  paymentType?: SortOrder;
  paymentAmount?: SortOrder;
  paymentIntentDate?: SortOrder;
  payment_status?: SortOrder;
  lastModTime?: SortOrder;
  lastModUserId?: SortOrder;
  application_id?: SortOrder;
  paymentVoucherId?: SortOrder;
  id?: SortOrder;
};
