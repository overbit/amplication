import { GrescoreWhereInput } from "./GrescoreWhereInput";
import { GrescoreOrderByInput } from "./GrescoreOrderByInput";

export type GrescoreFindManyArgs = {
  where?: GrescoreWhereInput;
  orderBy?: Array<GrescoreOrderByInput>;
  skip?: number;
  take?: number;
};
