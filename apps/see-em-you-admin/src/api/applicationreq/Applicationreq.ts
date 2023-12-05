import { ProgramsApplicationreq } from "../programsApplicationreq/ProgramsApplicationreq";

export type Applicationreq = {
  id: number;
  linkname: string;
  name: string;
  programsApplicationreqs?: Array<ProgramsApplicationreq>;
  short: string | null;
  sortorder: number;
};
