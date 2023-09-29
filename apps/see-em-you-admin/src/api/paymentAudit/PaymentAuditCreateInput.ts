import { Decimal } from "decimal.js";

export type PaymentAuditCreateInput = {
  applicationId: number;
  lastModUserId: number;
  paymentAmount: Decimal;
  paymentId: number;
  paymentIntentDate: Date;
  payment_status: "pending" | "paid" | "refunded" | "void";
  paymentType: number;
};
