import { SortOrder } from "../../util/SortOrder";

export type CashnetDirectOrderByInput = {
  batch?: SortOrder;
  station?: SortOrder;
  txNumber?: SortOrder;
  transType?: SortOrder;
  status?: SortOrder;
  custCode?: SortOrder;
  name?: SortOrder;
  appEmail?: SortOrder;
  appId?: SortOrder;
  dept?: SortOrder;
  paymentType?: SortOrder;
  amount?: SortOrder;
  created?: SortOrder;
  id?: SortOrder;
};
