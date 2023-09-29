import { SortOrder } from "../../util/SortOrder";

export type CcTransactionDetailOrderByInput = {
  ccId?: SortOrder;
  date?: SortOrder;
  id?: SortOrder;
  itemGlString?: SortOrder;
  itemName?: SortOrder;
  itemPriceEach?: SortOrder;
  itemQty?: SortOrder;
  paymentId?: SortOrder;
  reportDate?: SortOrder;
  time?: SortOrder;
  transactionType?: SortOrder;
};
