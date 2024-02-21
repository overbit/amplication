import { Decimal } from "decimal.js";
import { Application } from "../application/Application";

export type Gmatscore = {
  scorereceived: boolean;
  testdate: Date | null;
  verbalscore: number | null;
  verbalpercentile: number | null;
  quantitativescore: number | null;
  quantitativepercentile: number | null;
  totalscore: number | null;
  totalpercentile: number | null;
  analyticalwritingscore: Decimal | null;
  analyticalwritingpercentile: number | null;
  datafileId: number | null;
  application?: Application;
  id: number;
};
