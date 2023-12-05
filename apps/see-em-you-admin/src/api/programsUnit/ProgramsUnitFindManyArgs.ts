import { ProgramsUnitWhereInput } from "./ProgramsUnitWhereInput";
import { ProgramsUnitOrderByInput } from "./ProgramsUnitOrderByInput";

export type ProgramsUnitFindManyArgs = {
  where?: ProgramsUnitWhereInput;
  orderBy?: Array<ProgramsUnitOrderByInput>;
  skip?: number;
  take?: number;
};
