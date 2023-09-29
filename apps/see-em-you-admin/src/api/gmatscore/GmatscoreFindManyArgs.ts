import { GmatscoreWhereInput } from "./GmatscoreWhereInput";
import { GmatscoreOrderByInput } from "./GmatscoreOrderByInput";

export type GmatscoreFindManyArgs = {
  where?: GmatscoreWhereInput;
  orderBy?: Array<GmatscoreOrderByInput>;
  skip?: number;
  take?: number;
};
