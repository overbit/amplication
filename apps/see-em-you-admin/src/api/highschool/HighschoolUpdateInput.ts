import { Decimal } from "decimal.js";

export type HighschoolUpdateInput = {
  appId?: number;
  graduated?: number | null;
  hsCeeb?: number | null;
  hsDuration?: Decimal | null;
  hsGradYear?: number | null;
  hsName?: string | null;
  hsNces?: bigint | null;
  hsState?: string | null;
  hsZip?: string | null;
};
