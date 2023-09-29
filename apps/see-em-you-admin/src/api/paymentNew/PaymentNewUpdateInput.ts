import { Decimal } from "decimal.js";

export type PaymentNewUpdateInput = {
  applicationId?: number;
  lastModUserId?: number;
  paymentAmount?: Decimal;
  paymentIntentDate?: Date;
  payment_status?: "pending" | "paid" | "refunded" | "void";
  paymentType?: number;
};
