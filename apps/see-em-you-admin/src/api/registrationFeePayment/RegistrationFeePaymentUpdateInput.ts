import { ApplicationWhereUniqueInput } from "../application/ApplicationWhereUniqueInput";
import { Decimal } from "decimal.js";

export type RegistrationFeePaymentUpdateInput = {
  application?: ApplicationWhereUniqueInput;
  departmentId?: number;
  lastModUserId?: number;
  paymentAmount?: Decimal;
  paymentIntentDate?: Date;
  payment_status?: "pending" | "paid" | "refunded" | "void";
  paymentType?: number;
};
