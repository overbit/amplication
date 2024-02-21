import { Decimal } from "decimal.js";
import { Application } from "../application/Application";

export type Ieltsscore = {
  testdate: Date | null;
  listeningscore: Decimal | null;
  readingscore: Decimal | null;
  writingscore: Decimal | null;
  speakingscore: Decimal | null;
  overallscore: Decimal | null;
  scorereceived: number | null;
  datafileId: number | null;
  testEmail: string | null;
  application?: Application;
  id: number;
};
