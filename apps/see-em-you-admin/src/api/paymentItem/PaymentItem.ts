import { Decimal } from "decimal.js";
import { ProgramModel } from "../programModel/ProgramModel";

export type PaymentItem = {
  id: number;
  paymentId: number;
  paymentItemAmount: Decimal | null;
  paymentItemId: number;
  programs?: ProgramModel | null;
};
