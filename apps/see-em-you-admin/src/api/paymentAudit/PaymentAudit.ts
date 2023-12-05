import { Decimal } from "decimal.js";

export type PaymentAudit = {
  applicationId: number;
  id: number;
  lastModTime: Date;
  lastModUserId: number;
  paymentAmount: Decimal;
  paymentId: number;
  paymentIntentDate: Date;
  payment_status?: "pending" | "paid" | "refunded" | "void";
  paymentType: number;
  timeDeleted: Date;
};
