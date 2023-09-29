import { ApplicationreqWhereUniqueInput } from "../applicationreq/ApplicationreqWhereUniqueInput";
import { ProgramModelWhereUniqueInput } from "../programModel/ProgramModelWhereUniqueInput";

export type ProgramsApplicationreqCreateInput = {
  applicationreqs: ApplicationreqWhereUniqueInput;
  programs: ProgramModelWhereUniqueInput;
};
