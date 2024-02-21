import { SortOrder } from "../../util/SortOrder";

export type CcTransactionDetailOrderByInput = {
  ccId?: SortOrder;
  date?: SortOrder;
  time?: SortOrder;
  reportDate?: SortOrder;
  paymentId?: SortOrder;
  transactionType?: SortOrder;
  itemName?: SortOrder;
  itemQty?: SortOrder;
  itemPriceEach?: SortOrder;
  itemGlString?: SortOrder;
  id?: SortOrder;
};
