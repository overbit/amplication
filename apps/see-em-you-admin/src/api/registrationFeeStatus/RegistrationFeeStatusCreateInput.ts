import { Decimal } from "decimal.js";
import { ApplicationWhereUniqueInput } from "../application/ApplicationWhereUniqueInput";

export type RegistrationFeeStatusCreateInput = {
  departmentId: number;
  amount: Decimal;
  paid: boolean;
  waived: boolean;
  application: ApplicationWhereUniqueInput;
};
