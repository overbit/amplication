import { Decimal } from "decimal.js";
import { ApplicationWhereUniqueInput } from "../application/ApplicationWhereUniqueInput";
import { PaymentVoucherWhereUniqueInput } from "../paymentVoucher/PaymentVoucherWhereUniqueInput";

export type PaymentUpdateInput = {
  paymentId?: number;
  paymentType?: number;
  paymentAmount?: Decimal;
  paymentIntentDate?: Date;
  payment_status?: "pending" | "paid" | "refunded" | "void";
  lastModUserId?: number;
  application?: ApplicationWhereUniqueInput;
  paymentVoucher?: PaymentVoucherWhereUniqueInput | null;
};
