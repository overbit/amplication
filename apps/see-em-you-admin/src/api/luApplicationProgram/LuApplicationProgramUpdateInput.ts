import { Decimal } from "decimal.js";
import { ApplicationWhereUniqueInput } from "../application/ApplicationWhereUniqueInput";
import { ProgramModelWhereUniqueInput } from "../programModel/ProgramModelWhereUniqueInput";

export type LuApplicationProgramUpdateInput = {
  choice?: number;
  round2?: string | null;
  decision?: string | null;
  admissionStatus?: string | null;
  admit?: string | null;
  admitComments?: string | null;
  faccontact?: string | null;
  stucontact?: string | null;
  scholarshipAmt?: Decimal | null;
  scholarshipComments?: string | null;
  ltichoice?: string | null;
  msecertchoice?: string | null;
  application?: ApplicationWhereUniqueInput;
  programs?: ProgramModelWhereUniqueInput;
};
