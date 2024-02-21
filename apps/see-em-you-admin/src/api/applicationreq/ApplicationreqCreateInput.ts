import { ProgramsApplicationreqCreateNestedManyWithoutApplicationreqsInput } from "./ProgramsApplicationreqCreateNestedManyWithoutApplicationreqsInput";

export type ApplicationreqCreateInput = {
  name: string;
  short?: string | null;
  linkname: string;
  sortorder: number;
  programsApplicationreqs?: ProgramsApplicationreqCreateNestedManyWithoutApplicationreqsInput;
};
