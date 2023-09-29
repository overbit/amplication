import { ApplicationWhereUniqueInput } from "../application/ApplicationWhereUniqueInput";
import { ProgramModelWhereUniqueInput } from "../programModel/ProgramModelWhereUniqueInput";

export type MlAreaWhereInput = {
  application?: ApplicationWhereUniqueInput;
  programs?: ProgramModelWhereUniqueInput;
};
