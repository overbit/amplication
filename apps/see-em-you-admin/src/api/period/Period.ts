import { AaDepartment } from "../aaDepartment/AaDepartment";
import { Cohort } from "../cohort/Cohort";
import { PeriodApplication } from "../periodApplication/PeriodApplication";

export type Period = {
  unitId: number;
  periodTypeId: number;
  description: string | null;
  startDate: Date;
  endDate: Date | null;
  parentPeriodId: number | null;
  aaDepartment?: Array<AaDepartment>;
  cohort?: Array<Cohort>;
  periodApplication?: Array<PeriodApplication>;
  id: number;
};
