import { Decimal } from "decimal.js";

export type Toefl = {
  applicationId: number;
  datafileId: number | null;
  essay: Decimal | null;
  essaymb: number | null;
  id: number;
  scorereceived: boolean | null;
  section1: number | null;
  section1mb: number | null;
  section2: number | null;
  section2mb: number | null;
  section3: number | null;
  section3mb: number | null;
  testdate: Date | null;
  toeflEmail: string | null;
  toeflPaperEmail: string | null;
  total: number | null;
  totalmb: number | null;
  typeField: string | null;
};
