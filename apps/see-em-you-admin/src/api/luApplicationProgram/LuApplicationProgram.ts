import { Decimal } from "decimal.js";
import { Application } from "../application/Application";
import { ProgramModel } from "../programModel/ProgramModel";

export type LuApplicationProgram = {
  choice: number;
  round2: string | null;
  decision: string | null;
  admissionStatus: string | null;
  admit: string | null;
  admitComments: string | null;
  faccontact: string | null;
  stucontact: string | null;
  scholarshipAmt: Decimal | null;
  scholarshipComments: string | null;
  ltichoice: string | null;
  msecertchoice: string | null;
  application?: Application;
  programs?: ProgramModel;
  id: number;
};
