import { PaymentWhereUniqueInput } from "../payment/PaymentWhereUniqueInput";
import { IntFilter } from "../../util/IntFilter";

export type PaymentVoucherWhereInput = {
  payment?: PaymentWhereUniqueInput;
  id?: IntFilter;
};
