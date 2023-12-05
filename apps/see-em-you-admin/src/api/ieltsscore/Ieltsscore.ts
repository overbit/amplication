import { Application } from "../application/Application";
import { Decimal } from "decimal.js";

export type Ieltsscore = {
  application?: Application;
  datafileId: number | null;
  id: number;
  listeningscore: Decimal | null;
  overallscore: Decimal | null;
  readingscore: Decimal | null;
  scorereceived: number | null;
  speakingscore: Decimal | null;
  testdate: Date | null;
  testEmail: string | null;
  writingscore: Decimal | null;
};
