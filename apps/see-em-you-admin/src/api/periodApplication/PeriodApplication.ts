import { Application } from "../application/Application";
import { Period } from "../period/Period";

export type PeriodApplication = {
  application?: Application;
  id: number;
  period?: Period;
};
