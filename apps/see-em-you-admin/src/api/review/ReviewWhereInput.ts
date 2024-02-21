import { ApplicationWhereUniqueInput } from "../application/ApplicationWhereUniqueInput";
import { IntFilter } from "../../util/IntFilter";

export type ReviewWhereInput = {
  application?: ApplicationWhereUniqueInput;
  id?: IntFilter;
};
