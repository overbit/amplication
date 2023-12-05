import { ProgramGroupWhereInput } from "./ProgramGroupWhereInput";
import { ProgramGroupOrderByInput } from "./ProgramGroupOrderByInput";

export type ProgramGroupFindManyArgs = {
  where?: ProgramGroupWhereInput;
  orderBy?: Array<ProgramGroupOrderByInput>;
  skip?: number;
  take?: number;
};
