import { ProgramsApplicationreq } from "../programsApplicationreq/ProgramsApplicationreq";

export type Applicationreq = {
  name: string;
  short: string | null;
  linkname: string;
  sortorder: number;
  programsApplicationreqs?: Array<ProgramsApplicationreq>;
  id: number;
};
