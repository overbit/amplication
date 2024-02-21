import { Decimal } from "decimal.js";

export type PaymentAudit = {
  id: number;
  paymentId: number;
  applicationId: number;
  paymentType: number;
  paymentAmount: Decimal;
  paymentIntentDate: Date;
  payment_status?: "pending" | "paid" | "refunded" | "void";
  lastModTime: Date;
  lastModUserId: number;
  timeDeleted: Date;
};
