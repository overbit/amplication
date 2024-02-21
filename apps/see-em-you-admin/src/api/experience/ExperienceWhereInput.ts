import { ApplicationWhereUniqueInput } from "../application/ApplicationWhereUniqueInput";
import { IntFilter } from "../../util/IntFilter";

export type ExperienceWhereInput = {
  application?: ApplicationWhereUniqueInput;
  id?: IntFilter;
};
