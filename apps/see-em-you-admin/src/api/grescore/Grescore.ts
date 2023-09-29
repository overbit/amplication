import { Decimal } from "decimal.js";

export type Grescore = {
  analyticalpercentile: string | null;
  analyticalscore: string | null;
  analyticalwritingpercentile: string | null;
  analyticalwritingscore: Decimal | null;
  applicationId: number;
  athome: number | null;
  datafileId: number | null;
  greEmail: string | null;
  id: number;
  quantitativepercentile: string | null;
  quantitativescore: string | null;
  scorereceived: boolean;
  testdate: Date | null;
  verbalpercentile: string | null;
  verbalscore: string | null;
};
