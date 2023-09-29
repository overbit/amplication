import { CashnetPaymentWhereInput } from "./CashnetPaymentWhereInput";
import { CashnetPaymentOrderByInput } from "./CashnetPaymentOrderByInput";

export type CashnetPaymentFindManyArgs = {
  where?: CashnetPaymentWhereInput;
  orderBy?: Array<CashnetPaymentOrderByInput>;
  skip?: number;
  take?: number;
};
