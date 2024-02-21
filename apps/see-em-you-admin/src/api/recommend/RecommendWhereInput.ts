import { ApplicationWhereUniqueInput } from "../application/ApplicationWhereUniqueInput";
import { IntFilter } from "../../util/IntFilter";

export type RecommendWhereInput = {
  application?: ApplicationWhereUniqueInput;
  id?: IntFilter;
};
