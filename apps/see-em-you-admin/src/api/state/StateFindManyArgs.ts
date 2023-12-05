import { StateWhereInput } from "./StateWhereInput";
import { StateOrderByInput } from "./StateOrderByInput";

export type StateFindManyArgs = {
  where?: StateWhereInput;
  orderBy?: Array<StateOrderByInput>;
  skip?: number;
  take?: number;
};
