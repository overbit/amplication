import { ApplicationWhereUniqueInput } from "../application/ApplicationWhereUniqueInput";
import { IntFilter } from "../../util/IntFilter";

export type RegistrationFeePaymentWhereInput = {
  application?: ApplicationWhereUniqueInput;
  id?: IntFilter;
};
