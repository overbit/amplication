import { ProgramModelWhereUniqueInput } from "../programModel/ProgramModelWhereUniqueInput";
import { ApplicationreqWhereUniqueInput } from "../applicationreq/ApplicationreqWhereUniqueInput";

export type ProgramsApplicationreqUpdateInput = {
  programs?: ProgramModelWhereUniqueInput;
  applicationreqs?: ApplicationreqWhereUniqueInput;
};
