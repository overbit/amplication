import { ApplicationWhereUniqueInput } from "../application/ApplicationWhereUniqueInput";
import { ProgramModelWhereUniqueInput } from "../programModel/ProgramModelWhereUniqueInput";
import { IntFilter } from "../../util/IntFilter";

export type MlAreaWhereInput = {
  application?: ApplicationWhereUniqueInput;
  programs?: ProgramModelWhereUniqueInput;
  id?: IntFilter;
};
