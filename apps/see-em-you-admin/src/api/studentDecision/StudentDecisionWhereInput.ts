import { ApplicationWhereUniqueInput } from "../application/ApplicationWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";

export type StudentDecisionWhereInput = {
  application?: ApplicationWhereUniqueInput;
  id?: StringFilter;
};
