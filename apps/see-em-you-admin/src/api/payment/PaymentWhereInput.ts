import { ApplicationWhereUniqueInput } from "../application/ApplicationWhereUniqueInput";
import { PaymentVoucherWhereUniqueInput } from "../paymentVoucher/PaymentVoucherWhereUniqueInput";
import { IntFilter } from "../../util/IntFilter";

export type PaymentWhereInput = {
  application?: ApplicationWhereUniqueInput;
  paymentVoucher?: PaymentVoucherWhereUniqueInput;
  id?: IntFilter;
};
