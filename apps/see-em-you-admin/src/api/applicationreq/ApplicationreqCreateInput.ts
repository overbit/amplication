import { ProgramsApplicationreqCreateNestedManyWithoutApplicationreqsInput } from "./ProgramsApplicationreqCreateNestedManyWithoutApplicationreqsInput";

export type ApplicationreqCreateInput = {
  linkname: string;
  name: string;
  programsApplicationreqs?: ProgramsApplicationreqCreateNestedManyWithoutApplicationreqsInput;
  short?: string | null;
  sortorder: number;
};
