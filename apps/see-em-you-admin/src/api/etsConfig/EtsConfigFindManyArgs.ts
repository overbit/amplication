import { EtsConfigWhereInput } from "./EtsConfigWhereInput";
import { EtsConfigOrderByInput } from "./EtsConfigOrderByInput";

export type EtsConfigFindManyArgs = {
  where?: EtsConfigWhereInput;
  orderBy?: Array<EtsConfigOrderByInput>;
  skip?: number;
  take?: number;
};
