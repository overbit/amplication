import { AaDepartmentCreateNestedManyWithoutPeriodsInput } from "./AaDepartmentCreateNestedManyWithoutPeriodsInput";
import { CohortCreateNestedManyWithoutPeriodsInput } from "./CohortCreateNestedManyWithoutPeriodsInput";
import { PeriodApplicationCreateNestedManyWithoutPeriodsInput } from "./PeriodApplicationCreateNestedManyWithoutPeriodsInput";

export type PeriodCreateInput = {
  unitId: number;
  periodTypeId: number;
  description?: string | null;
  startDate: Date;
  endDate?: Date | null;
  parentPeriodId?: number | null;
  aaDepartment?: AaDepartmentCreateNestedManyWithoutPeriodsInput;
  cohort?: CohortCreateNestedManyWithoutPeriodsInput;
  periodApplication?: PeriodApplicationCreateNestedManyWithoutPeriodsInput;
};
