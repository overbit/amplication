import { Decimal } from "decimal.js";

export type GrescoreUpdateInput = {
  analyticalpercentile?: string | null;
  analyticalscore?: string | null;
  analyticalwritingpercentile?: string | null;
  analyticalwritingscore?: Decimal | null;
  applicationId?: number;
  athome?: number | null;
  datafileId?: number | null;
  greEmail?: string | null;
  quantitativepercentile?: string | null;
  quantitativescore?: string | null;
  scorereceived?: boolean;
  testdate?: Date | null;
  verbalpercentile?: string | null;
  verbalscore?: string | null;
};
