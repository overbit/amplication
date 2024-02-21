import { ApplicationWhereUniqueInput } from "../application/ApplicationWhereUniqueInput";
import { IntFilter } from "../../util/IntFilter";

export type IeltsscoreWhereInput = {
  application?: ApplicationWhereUniqueInput;
  id?: IntFilter;
};
