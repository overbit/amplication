import { ApplicationWhereUniqueInput } from "../application/ApplicationWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";

export type SpecialConsiderationWhereInput = {
  application?: ApplicationWhereUniqueInput;
  id?: StringFilter;
};
