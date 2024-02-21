import { ProgramModel } from "../programModel/ProgramModel";
import { Applicationreq } from "../applicationreq/Applicationreq";

export type ProgramsApplicationreq = {
  programs?: ProgramModel;
  applicationreqs?: Applicationreq;
  id: number;
};
