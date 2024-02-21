import { AaDepartmentUpdateManyWithoutPeriodsInput } from "./AaDepartmentUpdateManyWithoutPeriodsInput";
import { CohortUpdateManyWithoutPeriodsInput } from "./CohortUpdateManyWithoutPeriodsInput";
import { PeriodApplicationUpdateManyWithoutPeriodsInput } from "./PeriodApplicationUpdateManyWithoutPeriodsInput";

export type PeriodUpdateInput = {
  unitId?: number;
  periodTypeId?: number;
  description?: string | null;
  startDate?: Date;
  endDate?: Date | null;
  parentPeriodId?: number | null;
  aaDepartment?: AaDepartmentUpdateManyWithoutPeriodsInput;
  cohort?: CohortUpdateManyWithoutPeriodsInput;
  periodApplication?: PeriodApplicationUpdateManyWithoutPeriodsInput;
};
