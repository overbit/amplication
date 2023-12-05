import { SortOrder } from "../../util/SortOrder";

export type PaymentAuditOrderByInput = {
  applicationId?: SortOrder;
  id?: SortOrder;
  lastModTime?: SortOrder;
  lastModUserId?: SortOrder;
  paymentAmount?: SortOrder;
  paymentId?: SortOrder;
  paymentIntentDate?: SortOrder;
  payment_status?: SortOrder;
  paymentType?: SortOrder;
  timeDeleted?: SortOrder;
};
