import { ApplicationWhereUniqueInput } from "../application/ApplicationWhereUniqueInput";
import { ProgramModelWhereUniqueInput } from "../programModel/ProgramModelWhereUniqueInput";
import { Decimal } from "decimal.js";

export type LuApplicationProgramUpdateInput = {
  admissionStatus?: string | null;
  admit?: string | null;
  admitComments?: string | null;
  application?: ApplicationWhereUniqueInput;
  choice?: number;
  decision?: string | null;
  faccontact?: string | null;
  ltichoice?: string | null;
  msecertchoice?: string | null;
  programs?: ProgramModelWhereUniqueInput;
  round2?: string | null;
  scholarshipAmt?: Decimal | null;
  scholarshipComments?: string | null;
  stucontact?: string | null;
};
