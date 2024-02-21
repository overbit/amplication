import { ApplicationWhereUniqueInput } from "../application/ApplicationWhereUniqueInput";
import { IntFilter } from "../../util/IntFilter";

export type MlSupportingCourseworkWhereInput = {
  application?: ApplicationWhereUniqueInput;
  id?: IntFilter;
};
