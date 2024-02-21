import { ProgramModelWhereUniqueInput } from "../programModel/ProgramModelWhereUniqueInput";
import { ApplicationreqWhereUniqueInput } from "../applicationreq/ApplicationreqWhereUniqueInput";

export type ProgramsApplicationreqCreateInput = {
  programs: ProgramModelWhereUniqueInput;
  applicationreqs: ApplicationreqWhereUniqueInput;
};
