import { ProgramsApplicationreqListRelationFilter } from "../programsApplicationreq/ProgramsApplicationreqListRelationFilter";
import { IntFilter } from "../../util/IntFilter";

export type ApplicationreqWhereInput = {
  programsApplicationreqs?: ProgramsApplicationreqListRelationFilter;
  id?: IntFilter;
};
