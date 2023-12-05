import { PeriodWhereInput } from "./PeriodWhereInput";
import { PeriodOrderByInput } from "./PeriodOrderByInput";

export type PeriodFindManyArgs = {
  where?: PeriodWhereInput;
  orderBy?: Array<PeriodOrderByInput>;
  skip?: number;
  take?: number;
};
