import { ProgramModelUpdateManyWithoutDegreesInput } from "./ProgramModelUpdateManyWithoutDegreesInput";

export type DegreeUpdateInput = {
  name?: string;
  programs?: ProgramModelUpdateManyWithoutDegreesInput;
  short?: string;
};
