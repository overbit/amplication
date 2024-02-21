import { Application } from "../application/Application";

export type LuApplicationCohort = {
  cohortId: number;
  application?: Application;
  id: number;
};
