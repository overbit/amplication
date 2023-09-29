import { CcTransactionDetailWhereInput } from "./CcTransactionDetailWhereInput";
import { CcTransactionDetailOrderByInput } from "./CcTransactionDetailOrderByInput";

export type CcTransactionDetailFindManyArgs = {
  where?: CcTransactionDetailWhereInput;
  orderBy?: Array<CcTransactionDetailOrderByInput>;
  skip?: number;
  take?: number;
};
