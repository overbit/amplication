import { SortOrder } from "../../util/SortOrder";

export type PaymentAuditOrderByInput = {
  id?: SortOrder;
  paymentId?: SortOrder;
  applicationId?: SortOrder;
  paymentType?: SortOrder;
  paymentAmount?: SortOrder;
  paymentIntentDate?: SortOrder;
  payment_status?: SortOrder;
  lastModTime?: SortOrder;
  lastModUserId?: SortOrder;
  timeDeleted?: SortOrder;
};
