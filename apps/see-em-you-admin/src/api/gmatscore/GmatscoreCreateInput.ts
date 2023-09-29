import { Decimal } from "decimal.js";
import { ApplicationWhereUniqueInput } from "../application/ApplicationWhereUniqueInput";

export type GmatscoreCreateInput = {
  analyticalwritingpercentile?: number | null;
  analyticalwritingscore?: Decimal | null;
  application: ApplicationWhereUniqueInput;
  datafileId?: number | null;
  quantitativepercentile?: number | null;
  quantitativescore?: number | null;
  scorereceived: boolean;
  testdate?: Date | null;
  totalpercentile?: number | null;
  totalscore?: number | null;
  verbalpercentile?: number | null;
  verbalscore?: number | null;
};
