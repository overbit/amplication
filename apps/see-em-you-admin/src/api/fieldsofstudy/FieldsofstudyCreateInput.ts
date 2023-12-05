import { ProgramModelCreateNestedManyWithoutFieldsofstudiesInput } from "./ProgramModelCreateNestedManyWithoutFieldsofstudiesInput";

export type FieldsofstudyCreateInput = {
  name: string;
  programs?: ProgramModelCreateNestedManyWithoutFieldsofstudiesInput;
};
