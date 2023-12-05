import { SortOrder } from "../../util/SortOrder";

export type CashnetDirectOrderByInput = {
  amount?: SortOrder;
  appEmail?: SortOrder;
  appId?: SortOrder;
  batch?: SortOrder;
  created?: SortOrder;
  custCode?: SortOrder;
  dept?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  paymentType?: SortOrder;
  station?: SortOrder;
  status?: SortOrder;
  transType?: SortOrder;
  txNumber?: SortOrder;
};
