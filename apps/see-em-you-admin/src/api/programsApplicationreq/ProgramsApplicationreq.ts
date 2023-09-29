import { Applicationreq } from "../applicationreq/Applicationreq";
import { ProgramModel } from "../programModel/ProgramModel";

export type ProgramsApplicationreq = {
  applicationreqs?: Applicationreq;
  id: number;
  programs?: ProgramModel;
};
