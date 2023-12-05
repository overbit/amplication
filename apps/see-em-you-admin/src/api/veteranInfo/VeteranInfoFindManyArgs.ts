import { VeteranInfoWhereInput } from "./VeteranInfoWhereInput";
import { VeteranInfoOrderByInput } from "./VeteranInfoOrderByInput";

export type VeteranInfoFindManyArgs = {
  where?: VeteranInfoWhereInput;
  orderBy?: Array<VeteranInfoOrderByInput>;
  skip?: number;
  take?: number;
};
