import { ProgramModelCreateNestedManyWithoutDegreesInput } from "./ProgramModelCreateNestedManyWithoutDegreesInput";

export type DegreeCreateInput = {
  name: string;
  programs?: ProgramModelCreateNestedManyWithoutDegreesInput;
  short: string;
};
