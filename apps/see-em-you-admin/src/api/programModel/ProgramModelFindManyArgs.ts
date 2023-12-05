import { ProgramModelWhereInput } from "./ProgramModelWhereInput";
import { ProgramModelOrderByInput } from "./ProgramModelOrderByInput";

export type ProgramModelFindManyArgs = {
  where?: ProgramModelWhereInput;
  orderBy?: Array<ProgramModelOrderByInput>;
  skip?: number;
  take?: number;
};
