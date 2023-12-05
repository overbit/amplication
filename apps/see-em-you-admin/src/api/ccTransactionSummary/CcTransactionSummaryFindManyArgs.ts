import { CcTransactionSummaryWhereInput } from "./CcTransactionSummaryWhereInput";
import { CcTransactionSummaryOrderByInput } from "./CcTransactionSummaryOrderByInput";

export type CcTransactionSummaryFindManyArgs = {
  where?: CcTransactionSummaryWhereInput;
  orderBy?: Array<CcTransactionSummaryOrderByInput>;
  skip?: number;
  take?: number;
};
