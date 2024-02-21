import { Decimal } from "decimal.js";
import { ApplicationWhereUniqueInput } from "../application/ApplicationWhereUniqueInput";

export type RegistrationFeePaymentUpdateInput = {
  departmentId?: number;
  paymentType?: number;
  paymentAmount?: Decimal;
  paymentIntentDate?: Date;
  payment_status?: "pending" | "paid" | "refunded" | "void";
  lastModUserId?: number;
  application?: ApplicationWhereUniqueInput;
};
