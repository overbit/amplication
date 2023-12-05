import { PeriodProgramWhereInput } from "./PeriodProgramWhereInput";
import { PeriodProgramOrderByInput } from "./PeriodProgramOrderByInput";

export type PeriodProgramFindManyArgs = {
  where?: PeriodProgramWhereInput;
  orderBy?: Array<PeriodProgramOrderByInput>;
  skip?: number;
  take?: number;
};
