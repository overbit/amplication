import { CashnetPaymentCopyWhereInput } from "./CashnetPaymentCopyWhereInput";
import { CashnetPaymentCopyOrderByInput } from "./CashnetPaymentCopyOrderByInput";

export type CashnetPaymentCopyFindManyArgs = {
  where?: CashnetPaymentCopyWhereInput;
  orderBy?: Array<CashnetPaymentCopyOrderByInput>;
  skip?: number;
  take?: number;
};
