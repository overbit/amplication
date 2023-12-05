import { GenderWhereInput } from "./GenderWhereInput";
import { GenderOrderByInput } from "./GenderOrderByInput";

export type GenderFindManyArgs = {
  where?: GenderWhereInput;
  orderBy?: Array<GenderOrderByInput>;
  skip?: number;
  take?: number;
};
