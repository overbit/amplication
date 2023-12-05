import { PeriodApplicationWhereInput } from "./PeriodApplicationWhereInput";
import { PeriodApplicationOrderByInput } from "./PeriodApplicationOrderByInput";

export type PeriodApplicationFindManyArgs = {
  where?: PeriodApplicationWhereInput;
  orderBy?: Array<PeriodApplicationOrderByInput>;
  skip?: number;
  take?: number;
};
