import { SortOrder } from "../../util/SortOrder";

export type PaymentItemOrderByInput = {
  paymentItemId?: SortOrder;
  paymentId?: SortOrder;
  paymentItemAmount?: SortOrder;
  program_id?: SortOrder;
  id?: SortOrder;
};
