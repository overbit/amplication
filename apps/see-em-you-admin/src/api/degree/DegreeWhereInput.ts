import { ProgramModelListRelationFilter } from "../programModel/ProgramModelListRelationFilter";
import { IntFilter } from "../../util/IntFilter";

export type DegreeWhereInput = {
  programs?: ProgramModelListRelationFilter;
  id?: IntFilter;
};
