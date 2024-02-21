import { ApplicationWhereUniqueInput } from "../application/ApplicationWhereUniqueInput";
import { IntFilter } from "../../util/IntFilter";

export type GmatscoreWhereInput = {
  application?: ApplicationWhereUniqueInput;
  id?: IntFilter;
};
