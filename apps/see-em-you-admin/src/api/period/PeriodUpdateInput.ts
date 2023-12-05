import { AaDepartmentUpdateManyWithoutPeriodsInput } from "./AaDepartmentUpdateManyWithoutPeriodsInput";
import { CohortUpdateManyWithoutPeriodsInput } from "./CohortUpdateManyWithoutPeriodsInput";
import { PeriodApplicationUpdateManyWithoutPeriodsInput } from "./PeriodApplicationUpdateManyWithoutPeriodsInput";

export type PeriodUpdateInput = {
  aaDepartment?: AaDepartmentUpdateManyWithoutPeriodsInput;
  cohort?: CohortUpdateManyWithoutPeriodsInput;
  description?: string | null;
  endDate?: Date | null;
  parentPeriodId?: number | null;
  periodApplication?: PeriodApplicationUpdateManyWithoutPeriodsInput;
  periodTypeId?: number;
  startDate?: Date;
  unitId?: number;
};
