import { Decimal } from "decimal.js";

export type Toefl = {
  applicationId: number;
  testdate: Date | null;
  section1: number | null;
  section2: number | null;
  section3: number | null;
  essay: Decimal | null;
  total: number | null;
  scorereceived: boolean | null;
  typeField: string | null;
  datafileId: number | null;
  section1mb: number | null;
  section2mb: number | null;
  section3mb: number | null;
  essaymb: number | null;
  totalmb: number | null;
  toeflEmail: string | null;
  toeflPaperEmail: string | null;
  id: number;
};
