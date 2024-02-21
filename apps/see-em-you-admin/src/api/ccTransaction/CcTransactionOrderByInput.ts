import { SortOrder } from "../../util/SortOrder";

export type CcTransactionOrderByInput = {
  applicationId?: SortOrder;
  paymentId?: SortOrder;
  storeNumber?: SortOrder;
  cardholderNameLast?: SortOrder;
  cardholderNameFirst?: SortOrder;
  id?: SortOrder;
};
