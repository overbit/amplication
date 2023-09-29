import { SortOrder } from "../../util/SortOrder";

export type CcTransactionOrderByInput = {
  applicationId?: SortOrder;
  cardholderNameFirst?: SortOrder;
  cardholderNameLast?: SortOrder;
  id?: SortOrder;
  paymentId?: SortOrder;
  storeNumber?: SortOrder;
};
