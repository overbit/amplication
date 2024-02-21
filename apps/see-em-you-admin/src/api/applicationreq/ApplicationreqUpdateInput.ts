import { ProgramsApplicationreqUpdateManyWithoutApplicationreqsInput } from "./ProgramsApplicationreqUpdateManyWithoutApplicationreqsInput";

export type ApplicationreqUpdateInput = {
  name?: string;
  short?: string | null;
  linkname?: string;
  sortorder?: number;
  programsApplicationreqs?: ProgramsApplicationreqUpdateManyWithoutApplicationreqsInput;
};
