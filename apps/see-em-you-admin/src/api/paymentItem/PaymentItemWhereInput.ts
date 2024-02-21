import { ProgramModelWhereUniqueInput } from "../programModel/ProgramModelWhereUniqueInput";
import { IntFilter } from "../../util/IntFilter";

export type PaymentItemWhereInput = {
  programs?: ProgramModelWhereUniqueInput;
  id?: IntFilter;
};
