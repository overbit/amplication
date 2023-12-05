import { ApplicationWhereUniqueInput } from "../application/ApplicationWhereUniqueInput";
import { ProgramModelWhereUniqueInput } from "../programModel/ProgramModelWhereUniqueInput";

export type MlAreaUpdateInput = {
  application?: ApplicationWhereUniqueInput;
  area?: string;
  programs?: ProgramModelWhereUniqueInput;
};
