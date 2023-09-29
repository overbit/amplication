import { Decimal } from "decimal.js";

export type Highschool = {
  appId: number;
  created: Date;
  graduated: number | null;
  hsCeeb: number | null;
  hsDuration: Decimal | null;
  hsGradYear: number | null;
  hsName: string | null;
  hsNces: bigint | null;
  hsState: string | null;
  hsZip: string | null;
  id: number;
  modified: Date;
};
