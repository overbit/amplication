import { ApplicationWhereUniqueInput } from "../application/ApplicationWhereUniqueInput";
import { IntFilter } from "../../util/IntFilter";

export type FellowshipWhereInput = {
  application?: ApplicationWhereUniqueInput;
  id?: IntFilter;
};
