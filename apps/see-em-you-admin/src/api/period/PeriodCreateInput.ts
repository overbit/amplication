import { AaDepartmentCreateNestedManyWithoutPeriodsInput } from "./AaDepartmentCreateNestedManyWithoutPeriodsInput";
import { CohortCreateNestedManyWithoutPeriodsInput } from "./CohortCreateNestedManyWithoutPeriodsInput";
import { PeriodApplicationCreateNestedManyWithoutPeriodsInput } from "./PeriodApplicationCreateNestedManyWithoutPeriodsInput";

export type PeriodCreateInput = {
  aaDepartment?: AaDepartmentCreateNestedManyWithoutPeriodsInput;
  cohort?: CohortCreateNestedManyWithoutPeriodsInput;
  description?: string | null;
  endDate?: Date | null;
  parentPeriodId?: number | null;
  periodApplication?: PeriodApplicationCreateNestedManyWithoutPeriodsInput;
  periodTypeId: number;
  startDate: Date;
  unitId: number;
};
