import { Decimal } from "decimal.js";
import { Application } from "../application/Application";

export type RegistrationFeeStatus = {
  amount: Decimal;
  application?: Application;
  departmentId: number;
  id: number;
  paid: boolean;
  waived: boolean;
};
