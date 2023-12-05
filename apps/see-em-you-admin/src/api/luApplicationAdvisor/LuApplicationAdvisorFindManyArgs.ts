import { LuApplicationAdvisorWhereInput } from "./LuApplicationAdvisorWhereInput";
import { LuApplicationAdvisorOrderByInput } from "./LuApplicationAdvisorOrderByInput";

export type LuApplicationAdvisorFindManyArgs = {
  where?: LuApplicationAdvisorWhereInput;
  orderBy?: Array<LuApplicationAdvisorOrderByInput>;
  skip?: number;
  take?: number;
};
