import { CcTransactionWhereInput } from "./CcTransactionWhereInput";
import { CcTransactionOrderByInput } from "./CcTransactionOrderByInput";

export type CcTransactionFindManyArgs = {
  where?: CcTransactionWhereInput;
  orderBy?: Array<CcTransactionOrderByInput>;
  skip?: number;
  take?: number;
};
