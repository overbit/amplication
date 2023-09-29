import { ApplicationWhereUniqueInput } from "../application/ApplicationWhereUniqueInput";
import { ProgramModelWhereUniqueInput } from "../programModel/ProgramModelWhereUniqueInput";

export type MlAreaCreateInput = {
  application: ApplicationWhereUniqueInput;
  area: string;
  programs: ProgramModelWhereUniqueInput;
};
