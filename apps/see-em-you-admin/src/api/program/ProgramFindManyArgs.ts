import { ProgramWhereInput } from "./ProgramWhereInput";
import { ProgramOrderByInput } from "./ProgramOrderByInput";

export type ProgramFindManyArgs = {
  where?: ProgramWhereInput;
  orderBy?: Array<ProgramOrderByInput>;
  skip?: number;
  take?: number;
};
