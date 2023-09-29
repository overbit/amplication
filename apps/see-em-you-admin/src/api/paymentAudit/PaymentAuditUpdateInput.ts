import { Decimal } from "decimal.js";

export type PaymentAuditUpdateInput = {
  applicationId?: number;
  lastModUserId?: number;
  paymentAmount?: Decimal;
  paymentId?: number;
  paymentIntentDate?: Date;
  payment_status?: "pending" | "paid" | "refunded" | "void";
  paymentType?: number;
};
