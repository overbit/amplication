import { Application } from "../application/Application";
import { Decimal } from "decimal.js";
import { PaymentVoucher } from "../paymentVoucher/PaymentVoucher";

export type Payment = {
  application?: Application;
  id: number;
  lastModTime: Date;
  lastModUserId: number;
  paymentAmount: Decimal;
  paymentId: number;
  paymentIntentDate: Date;
  payment_status?: "pending" | "paid" | "refunded" | "void";
  paymentType: number;
  paymentVoucher?: PaymentVoucher | null;
};
