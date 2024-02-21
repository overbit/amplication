import { Decimal } from "decimal.js";

export type Grescore = {
  applicationId: number;
  testdate: Date | null;
  verbalscore: string | null;
  verbalpercentile: string | null;
  quantitativescore: string | null;
  quantitativepercentile: string | null;
  analyticalscore: string | null;
  analyticalpercentile: string | null;
  analyticalwritingscore: Decimal | null;
  analyticalwritingpercentile: string | null;
  scorereceived: boolean;
  datafileId: number | null;
  athome: number | null;
  greEmail: string | null;
  id: number;
};
