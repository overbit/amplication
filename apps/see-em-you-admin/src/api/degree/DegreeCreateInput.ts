import { ProgramModelCreateNestedManyWithoutDegreesInput } from "./ProgramModelCreateNestedManyWithoutDegreesInput";

export type DegreeCreateInput = {
  name: string;
  short: string;
  programs?: ProgramModelCreateNestedManyWithoutDegreesInput;
};
