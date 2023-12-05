import { Decimal } from "decimal.js";
import { ApplicationWhereUniqueInput } from "../application/ApplicationWhereUniqueInput";

export type RegistrationFeeStatusUpdateInput = {
  amount?: Decimal;
  application?: ApplicationWhereUniqueInput;
  departmentId?: number;
  paid?: boolean;
  waived?: boolean;
};
