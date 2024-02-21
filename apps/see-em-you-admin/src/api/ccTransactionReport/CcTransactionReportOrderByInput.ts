import { SortOrder } from "../../util/SortOrder";

export type CcTransactionReportOrderByInput = {
  size?: SortOrder;
  lastModDate?: SortOrder;
  statusTime?: SortOrder;
  id?: SortOrder;
};
