import { ProgramModelUpdateManyWithoutDegreesInput } from "./ProgramModelUpdateManyWithoutDegreesInput";

export type DegreeUpdateInput = {
  name?: string;
  short?: string;
  programs?: ProgramModelUpdateManyWithoutDegreesInput;
};
