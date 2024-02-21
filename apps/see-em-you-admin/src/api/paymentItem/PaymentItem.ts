import { Decimal } from "decimal.js";
import { ProgramModel } from "../programModel/ProgramModel";

export type PaymentItem = {
  paymentItemId: number;
  paymentId: number;
  paymentItemAmount: Decimal | null;
  programs?: ProgramModel | null;
  id: number;
};
