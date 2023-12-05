import { RevgroupWhereInput } from "./RevgroupWhereInput";
import { RevgroupOrderByInput } from "./RevgroupOrderByInput";

export type RevgroupFindManyArgs = {
  where?: RevgroupWhereInput;
  orderBy?: Array<RevgroupOrderByInput>;
  skip?: number;
  take?: number;
};
