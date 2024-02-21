import { Decimal } from "decimal.js";
import { Application } from "../application/Application";
import { PaymentVoucher } from "../paymentVoucher/PaymentVoucher";

export type Payment = {
  paymentId: number;
  paymentType: number;
  paymentAmount: Decimal;
  paymentIntentDate: Date;
  payment_status?: "pending" | "paid" | "refunded" | "void";
  lastModTime: Date;
  lastModUserId: number;
  application?: Application;
  paymentVoucher?: PaymentVoucher | null;
  id: number;
};
