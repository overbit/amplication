import { ApplicationWhereUniqueInput } from "../application/ApplicationWhereUniqueInput";
import { IntFilter } from "../../util/IntFilter";

export type RissFundingWhereInput = {
  application?: ApplicationWhereUniqueInput;
  id?: IntFilter;
};
