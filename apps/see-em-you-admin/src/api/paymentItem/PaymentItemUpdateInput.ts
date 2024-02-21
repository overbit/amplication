import { Decimal } from "decimal.js";
import { ProgramModelWhereUniqueInput } from "../programModel/ProgramModelWhereUniqueInput";

export type PaymentItemUpdateInput = {
  paymentItemId?: number;
  paymentId?: number;
  paymentItemAmount?: Decimal | null;
  programs?: ProgramModelWhereUniqueInput | null;
};
