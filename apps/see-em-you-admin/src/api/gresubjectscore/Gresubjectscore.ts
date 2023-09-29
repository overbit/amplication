import { Application } from "../application/Application";

export type Gresubjectscore = {
  application?: Application;
  datafileId: number | null;
  greSubEmail: string | null;
  id: number;
  name: string | null;
  percentile: string | null;
  score: string | null;
  scorereceived: boolean;
  testdate: Date | null;
};
