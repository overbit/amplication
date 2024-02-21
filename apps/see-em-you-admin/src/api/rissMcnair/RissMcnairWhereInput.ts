import { ApplicationWhereUniqueInput } from "../application/ApplicationWhereUniqueInput";
import { IntFilter } from "../../util/IntFilter";

export type RissMcnairWhereInput = {
  application?: ApplicationWhereUniqueInput;
  id?: IntFilter;
};
