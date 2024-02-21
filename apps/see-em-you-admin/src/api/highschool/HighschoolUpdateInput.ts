import { Decimal } from "decimal.js";

export type HighschoolUpdateInput = {
  appId?: number;
  hsName?: string | null;
  hsCeeb?: number | null;
  hsNces?: bigint | null;
  hsState?: string | null;
  hsZip?: string | null;
  hsGradYear?: number | null;
  hsDuration?: Decimal | null;
  graduated?: number | null;
};
