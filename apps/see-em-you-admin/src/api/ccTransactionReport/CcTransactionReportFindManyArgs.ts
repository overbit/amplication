import { CcTransactionReportWhereInput } from "./CcTransactionReportWhereInput";
import { CcTransactionReportOrderByInput } from "./CcTransactionReportOrderByInput";

export type CcTransactionReportFindManyArgs = {
  where?: CcTransactionReportWhereInput;
  orderBy?: Array<CcTransactionReportOrderByInput>;
  skip?: number;
  take?: number;
};
