import { Decimal } from "decimal.js";
import { ProgramModelWhereUniqueInput } from "../programModel/ProgramModelWhereUniqueInput";

export type PaymentItemCreateInput = {
  paymentItemId: number;
  paymentId: number;
  paymentItemAmount?: Decimal | null;
  programs?: ProgramModelWhereUniqueInput | null;
};
