import { IntFilter } from "../../util/IntFilter";
import { ApplicationWhereUniqueInput } from "../application/ApplicationWhereUniqueInput";

export type MseCodilityWhereInput = {
  id?: IntFilter;
  application?: ApplicationWhereUniqueInput;
};
