import { Decimal } from "decimal.js";
import { Application } from "../application/Application";

export type Gmatscore = {
  analyticalwritingpercentile: number | null;
  analyticalwritingscore: Decimal | null;
  application?: Application;
  datafileId: number | null;
  id: number;
  quantitativepercentile: number | null;
  quantitativescore: number | null;
  scorereceived: boolean;
  testdate: Date | null;
  totalpercentile: number | null;
  totalscore: number | null;
  verbalpercentile: number | null;
  verbalscore: number | null;
};
