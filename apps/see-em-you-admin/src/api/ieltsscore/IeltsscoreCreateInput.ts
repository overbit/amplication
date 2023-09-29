import { ApplicationWhereUniqueInput } from "../application/ApplicationWhereUniqueInput";
import { Decimal } from "decimal.js";

export type IeltsscoreCreateInput = {
  application: ApplicationWhereUniqueInput;
  datafileId?: number | null;
  listeningscore?: Decimal | null;
  overallscore?: Decimal | null;
  readingscore?: Decimal | null;
  scorereceived?: number | null;
  speakingscore?: Decimal | null;
  testdate?: Date | null;
  testEmail?: string | null;
  writingscore?: Decimal | null;
};
