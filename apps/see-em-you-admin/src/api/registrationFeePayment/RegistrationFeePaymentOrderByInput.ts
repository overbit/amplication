import { SortOrder } from "../../util/SortOrder";

export type RegistrationFeePaymentOrderByInput = {
  departmentId?: SortOrder;
  paymentType?: SortOrder;
  paymentAmount?: SortOrder;
  paymentIntentDate?: SortOrder;
  payment_status?: SortOrder;
  lastModTime?: SortOrder;
  lastModUserId?: SortOrder;
  application_id?: SortOrder;
  id?: SortOrder;
};
