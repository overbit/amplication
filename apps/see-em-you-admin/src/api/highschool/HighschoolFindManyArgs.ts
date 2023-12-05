import { HighschoolWhereInput } from "./HighschoolWhereInput";
import { HighschoolOrderByInput } from "./HighschoolOrderByInput";

export type HighschoolFindManyArgs = {
  where?: HighschoolWhereInput;
  orderBy?: Array<HighschoolOrderByInput>;
  skip?: number;
  take?: number;
};
