import { Decimal } from "decimal.js";

export type PaymentNew = {
  applicationId: number;
  paymentType: number;
  paymentAmount: Decimal;
  paymentIntentDate: Date;
  payment_status?: "pending" | "paid" | "refunded" | "void";
  lastModTime: Date;
  lastModUserId: number;
  id: number;
};
