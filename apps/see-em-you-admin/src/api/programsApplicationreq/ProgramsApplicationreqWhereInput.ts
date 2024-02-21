import { ProgramModelWhereUniqueInput } from "../programModel/ProgramModelWhereUniqueInput";
import { ApplicationreqWhereUniqueInput } from "../applicationreq/ApplicationreqWhereUniqueInput";
import { IntFilter } from "../../util/IntFilter";

export type ProgramsApplicationreqWhereInput = {
  programs?: ProgramModelWhereUniqueInput;
  applicationreqs?: ApplicationreqWhereUniqueInput;
  id?: IntFilter;
};
