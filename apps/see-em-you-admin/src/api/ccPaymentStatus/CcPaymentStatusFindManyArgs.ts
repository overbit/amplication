import { CcPaymentStatusWhereInput } from "./CcPaymentStatusWhereInput";
import { CcPaymentStatusOrderByInput } from "./CcPaymentStatusOrderByInput";

export type CcPaymentStatusFindManyArgs = {
  where?: CcPaymentStatusWhereInput;
  orderBy?: Array<CcPaymentStatusOrderByInput>;
  skip?: number;
  take?: number;
};
