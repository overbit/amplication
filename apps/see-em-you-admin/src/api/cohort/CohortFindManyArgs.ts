import { CohortWhereInput } from "./CohortWhereInput";
import { CohortOrderByInput } from "./CohortOrderByInput";

export type CohortFindManyArgs = {
  where?: CohortWhereInput;
  orderBy?: Array<CohortOrderByInput>;
  skip?: number;
  take?: number;
};
