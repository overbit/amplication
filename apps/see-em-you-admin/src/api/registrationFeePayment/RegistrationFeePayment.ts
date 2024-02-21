import { Decimal } from "decimal.js";
import { Application } from "../application/Application";

export type RegistrationFeePayment = {
  departmentId: number;
  paymentType: number;
  paymentAmount: Decimal;
  paymentIntentDate: Date;
  payment_status?: "pending" | "paid" | "refunded" | "void";
  lastModTime: Date;
  lastModUserId: number;
  application?: Application;
  id: number;
};
