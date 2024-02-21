import { ApplicationWhereUniqueInput } from "../application/ApplicationWhereUniqueInput";
import { ProgramModelWhereUniqueInput } from "../programModel/ProgramModelWhereUniqueInput";

export type MlAreaCreateInput = {
  area: string;
  application: ApplicationWhereUniqueInput;
  programs: ProgramModelWhereUniqueInput;
};
