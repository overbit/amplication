import { Application } from "../application/Application";
import { Decimal } from "decimal.js";

export type RegistrationFeePayment = {
  application?: Application;
  departmentId: number;
  id: number;
  lastModTime: Date;
  lastModUserId: number;
  paymentAmount: Decimal;
  paymentIntentDate: Date;
  payment_status?: "pending" | "paid" | "refunded" | "void";
  paymentType: number;
};
