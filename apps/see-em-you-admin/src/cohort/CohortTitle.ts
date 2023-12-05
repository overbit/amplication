import { Cohort as TCohort } from "../api/cohort/Cohort";

export const COHORT_TITLE_FIELD = "id";

export const CohortTitle = (record: TCohort): string => {
  return record.id?.toString() || String(record.id);
};
