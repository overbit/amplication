import { Decimal } from "decimal.js";

export type PaymentAuditUpdateInput = {
  paymentId?: number;
  applicationId?: number;
  paymentType?: number;
  paymentAmount?: Decimal;
  paymentIntentDate?: Date;
  payment_status?: "pending" | "paid" | "refunded" | "void";
  lastModUserId?: number;
};
