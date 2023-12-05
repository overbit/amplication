import { ApplicationWhereUniqueInput } from "../application/ApplicationWhereUniqueInput";
import { PaymentVoucherWhereUniqueInput } from "../paymentVoucher/PaymentVoucherWhereUniqueInput";

export type PaymentWhereInput = {
  application?: ApplicationWhereUniqueInput;
  paymentVoucher?: PaymentVoucherWhereUniqueInput;
};
