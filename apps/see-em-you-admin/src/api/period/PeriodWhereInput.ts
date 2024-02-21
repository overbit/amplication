import { AaDepartmentListRelationFilter } from "../aaDepartment/AaDepartmentListRelationFilter";
import { CohortListRelationFilter } from "../cohort/CohortListRelationFilter";
import { PeriodApplicationListRelationFilter } from "../periodApplication/PeriodApplicationListRelationFilter";
import { IntFilter } from "../../util/IntFilter";

export type PeriodWhereInput = {
  aaDepartment?: AaDepartmentListRelationFilter;
  cohort?: CohortListRelationFilter;
  periodApplication?: PeriodApplicationListRelationFilter;
  id?: IntFilter;
};
