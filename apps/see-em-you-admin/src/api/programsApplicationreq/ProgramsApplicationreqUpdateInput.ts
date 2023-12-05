import { ApplicationreqWhereUniqueInput } from "../applicationreq/ApplicationreqWhereUniqueInput";
import { ProgramModelWhereUniqueInput } from "../programModel/ProgramModelWhereUniqueInput";

export type ProgramsApplicationreqUpdateInput = {
  applicationreqs?: ApplicationreqWhereUniqueInput;
  programs?: ProgramModelWhereUniqueInput;
};
