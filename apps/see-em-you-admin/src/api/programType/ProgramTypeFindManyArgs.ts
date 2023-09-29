import { ProgramTypeWhereInput } from "./ProgramTypeWhereInput";
import { ProgramTypeOrderByInput } from "./ProgramTypeOrderByInput";

export type ProgramTypeFindManyArgs = {
  where?: ProgramTypeWhereInput;
  orderBy?: Array<ProgramTypeOrderByInput>;
  skip?: number;
  take?: number;
};
