import { Decimal } from "decimal.js";
import { ProgramModelWhereUniqueInput } from "../programModel/ProgramModelWhereUniqueInput";

export type PaymentItemUpdateInput = {
  paymentId?: number;
  paymentItemAmount?: Decimal | null;
  paymentItemId?: number;
  programs?: ProgramModelWhereUniqueInput | null;
};
