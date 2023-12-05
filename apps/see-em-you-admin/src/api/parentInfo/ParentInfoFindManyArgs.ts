import { ParentInfoWhereInput } from "./ParentInfoWhereInput";
import { ParentInfoOrderByInput } from "./ParentInfoOrderByInput";

export type ParentInfoFindManyArgs = {
  where?: ParentInfoWhereInput;
  orderBy?: Array<ParentInfoOrderByInput>;
  skip?: number;
  take?: number;
};
