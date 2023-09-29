import { ApplicationWhereUniqueInput } from "../application/ApplicationWhereUniqueInput";
import { ProgramModelWhereUniqueInput } from "../programModel/ProgramModelWhereUniqueInput";

export type LuApplicationProgramWhereInput = {
  application?: ApplicationWhereUniqueInput;
  programs?: ProgramModelWhereUniqueInput;
};
