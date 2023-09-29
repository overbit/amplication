import { ApplicationreqWhereUniqueInput } from "../applicationreq/ApplicationreqWhereUniqueInput";
import { ProgramModelWhereUniqueInput } from "../programModel/ProgramModelWhereUniqueInput";

export type ProgramsApplicationreqWhereInput = {
  applicationreqs?: ApplicationreqWhereUniqueInput;
  programs?: ProgramModelWhereUniqueInput;
};
