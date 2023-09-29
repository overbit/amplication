import { PaymentWhereUniqueInput } from "../payment/PaymentWhereUniqueInput";

export type PaymentVoucherCreateInput = {
  datafileinfoId: number;
  payment: PaymentWhereUniqueInput;
};
