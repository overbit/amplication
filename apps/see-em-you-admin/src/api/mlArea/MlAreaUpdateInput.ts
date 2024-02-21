import { ApplicationWhereUniqueInput } from "../application/ApplicationWhereUniqueInput";
import { ProgramModelWhereUniqueInput } from "../programModel/ProgramModelWhereUniqueInput";

export type MlAreaUpdateInput = {
  area?: string;
  application?: ApplicationWhereUniqueInput;
  programs?: ProgramModelWhereUniqueInput;
};
