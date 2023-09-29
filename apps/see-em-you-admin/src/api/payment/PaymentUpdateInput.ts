import { ApplicationWhereUniqueInput } from "../application/ApplicationWhereUniqueInput";
import { Decimal } from "decimal.js";
import { PaymentVoucherWhereUniqueInput } from "../paymentVoucher/PaymentVoucherWhereUniqueInput";

export type PaymentUpdateInput = {
  application?: ApplicationWhereUniqueInput;
  lastModUserId?: number;
  paymentAmount?: Decimal;
  paymentId?: number;
  paymentIntentDate?: Date;
  payment_status?: "pending" | "paid" | "refunded" | "void";
  paymentType?: number;
  paymentVoucher?: PaymentVoucherWhereUniqueInput | null;
};
