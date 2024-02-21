import { Application } from "../application/Application";

export type Fellowship = {
  name: string | null;
  amount: string | null;
  status: string | null;
  appliedDate: Date | null;
  awardDate: Date | null;
  duration: number | null;
  datafileId: number | null;
  short: number | null;
  application?: Application;
  id: number;
};
