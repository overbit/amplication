import { ApplicationWhereUniqueInput } from "../application/ApplicationWhereUniqueInput";
import { IntFilter } from "../../util/IntFilter";

export type AcoPalWhereInput = {
  application?: ApplicationWhereUniqueInput;
  id?: IntFilter;
};
