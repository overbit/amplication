import { LuApplicationCohortWhereInput } from "./LuApplicationCohortWhereInput";
import { LuApplicationCohortOrderByInput } from "./LuApplicationCohortOrderByInput";

export type LuApplicationCohortFindManyArgs = {
  where?: LuApplicationCohortWhereInput;
  orderBy?: Array<LuApplicationCohortOrderByInput>;
  skip?: number;
  take?: number;
};
