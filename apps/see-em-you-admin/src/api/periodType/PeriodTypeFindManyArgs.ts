import { PeriodTypeWhereInput } from "./PeriodTypeWhereInput";
import { PeriodTypeOrderByInput } from "./PeriodTypeOrderByInput";

export type PeriodTypeFindManyArgs = {
  where?: PeriodTypeWhereInput;
  orderBy?: Array<PeriodTypeOrderByInput>;
  skip?: number;
  take?: number;
};
