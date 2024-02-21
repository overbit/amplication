import { Decimal } from "decimal.js";
import { Application } from "../application/Application";

export type RegistrationFeeStatus = {
  departmentId: number;
  amount: Decimal;
  paid: boolean;
  waived: boolean;
  application?: Application;
  id: number;
};
