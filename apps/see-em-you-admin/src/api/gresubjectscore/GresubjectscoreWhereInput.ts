import { ApplicationWhereUniqueInput } from "../application/ApplicationWhereUniqueInput";
import { IntFilter } from "../../util/IntFilter";

export type GresubjectscoreWhereInput = {
  application?: ApplicationWhereUniqueInput;
  id?: IntFilter;
};
