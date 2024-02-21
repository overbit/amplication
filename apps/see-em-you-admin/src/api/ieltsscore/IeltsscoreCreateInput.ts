import { Decimal } from "decimal.js";
import { ApplicationWhereUniqueInput } from "../application/ApplicationWhereUniqueInput";

export type IeltsscoreCreateInput = {
  testdate?: Date | null;
  listeningscore?: Decimal | null;
  readingscore?: Decimal | null;
  writingscore?: Decimal | null;
  speakingscore?: Decimal | null;
  overallscore?: Decimal | null;
  scorereceived?: number | null;
  datafileId?: number | null;
  testEmail?: string | null;
  application: ApplicationWhereUniqueInput;
};
