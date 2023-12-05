import { LuApplicationProgramWhereInput } from "./LuApplicationProgramWhereInput";
import { LuApplicationProgramOrderByInput } from "./LuApplicationProgramOrderByInput";

export type LuApplicationProgramFindManyArgs = {
  where?: LuApplicationProgramWhereInput;
  orderBy?: Array<LuApplicationProgramOrderByInput>;
  skip?: number;
  take?: number;
};
