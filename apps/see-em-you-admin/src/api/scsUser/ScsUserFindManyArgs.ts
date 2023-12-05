import { ScsUserWhereInput } from "./ScsUserWhereInput";
import { ScsUserOrderByInput } from "./ScsUserOrderByInput";

export type ScsUserFindManyArgs = {
  where?: ScsUserWhereInput;
  orderBy?: Array<ScsUserOrderByInput>;
  skip?: number;
  take?: number;
};
