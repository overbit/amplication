import { ProgramModelListRelationFilter } from "../programModel/ProgramModelListRelationFilter";
import { IntFilter } from "../../util/IntFilter";

export type FieldsofstudyWhereInput = {
  programs?: ProgramModelListRelationFilter;
  id?: IntFilter;
};
