import { AaDepartment } from "../aaDepartment/AaDepartment";
import { Cohort } from "../cohort/Cohort";
import { PeriodApplication } from "../periodApplication/PeriodApplication";

export type Period = {
  aaDepartment?: Array<AaDepartment>;
  cohort?: Array<Cohort>;
  description: string | null;
  endDate: Date | null;
  id: number;
  parentPeriodId: number | null;
  periodApplication?: Array<PeriodApplication>;
  periodTypeId: number;
  startDate: Date;
  unitId: number;
};
