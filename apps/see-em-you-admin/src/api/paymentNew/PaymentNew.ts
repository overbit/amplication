import { Decimal } from "decimal.js";

export type PaymentNew = {
  applicationId: number;
  id: number;
  lastModTime: Date;
  lastModUserId: number;
  paymentAmount: Decimal;
  paymentIntentDate: Date;
  payment_status?: "pending" | "paid" | "refunded" | "void";
  paymentType: number;
};
