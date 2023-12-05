import { LuApplicationGroupWhereInput } from "./LuApplicationGroupWhereInput";
import { LuApplicationGroupOrderByInput } from "./LuApplicationGroupOrderByInput";

export type LuApplicationGroupFindManyArgs = {
  where?: LuApplicationGroupWhereInput;
  orderBy?: Array<LuApplicationGroupOrderByInput>;
  skip?: number;
  take?: number;
};
