import { ApplicationWhereUniqueInput } from "../application/ApplicationWhereUniqueInput";
import { IntFilter } from "../../util/IntFilter";

export type RegistrationFeeStatusWhereInput = {
  application?: ApplicationWhereUniqueInput;
  id?: IntFilter;
};
