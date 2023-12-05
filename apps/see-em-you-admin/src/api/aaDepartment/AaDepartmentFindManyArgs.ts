import { AaDepartmentWhereInput } from "./AaDepartmentWhereInput";
import { AaDepartmentOrderByInput } from "./AaDepartmentOrderByInput";

export type AaDepartmentFindManyArgs = {
  where?: AaDepartmentWhereInput;
  orderBy?: Array<AaDepartmentOrderByInput>;
  skip?: number;
  take?: number;
};
