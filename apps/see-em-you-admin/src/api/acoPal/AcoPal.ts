import { Application } from "../application/Application";

export type AcoPal = {
  aco: boolean | null;
  pal: boolean | null;
  application?: Application;
  id: number;
};
