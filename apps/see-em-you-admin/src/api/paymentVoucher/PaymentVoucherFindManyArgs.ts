import { PaymentVoucherWhereInput } from "./PaymentVoucherWhereInput";
import { PaymentVoucherOrderByInput } from "./PaymentVoucherOrderByInput";

export type PaymentVoucherFindManyArgs = {
  where?: PaymentVoucherWhereInput;
  orderBy?: Array<PaymentVoucherOrderByInput>;
  skip?: number;
  take?: number;
};
