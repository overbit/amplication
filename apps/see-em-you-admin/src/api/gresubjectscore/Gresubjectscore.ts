import { Application } from "../application/Application";

export type Gresubjectscore = {
  testdate: Date | null;
  name: string | null;
  score: string | null;
  percentile: string | null;
  datafileId: number | null;
  greSubEmail: string | null;
  scorereceived: boolean;
  application?: Application;
  id: number;
};
