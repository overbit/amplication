import { Application } from "../application/Application";

export type Fellowship = {
  amount: string | null;
  application?: Application;
  appliedDate: Date | null;
  awardDate: Date | null;
  datafileId: number | null;
  duration: number | null;
  id: number;
  name: string | null;
  short: number | null;
  status: string | null;
};
