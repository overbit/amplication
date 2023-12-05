import { BfDepartmentWhereInput } from "./BfDepartmentWhereInput";
import { BfDepartmentOrderByInput } from "./BfDepartmentOrderByInput";

export type BfDepartmentFindManyArgs = {
  where?: BfDepartmentWhereInput;
  orderBy?: Array<BfDepartmentOrderByInput>;
  skip?: number;
  take?: number;
};
