import { ApplicationWhereUniqueInput } from "../application/ApplicationWhereUniqueInput";
import { IntFilter } from "../../util/IntFilter";

export type CashnetPaymentWhereInput = {
  application?: ApplicationWhereUniqueInput;
  id?: IntFilter;
};
