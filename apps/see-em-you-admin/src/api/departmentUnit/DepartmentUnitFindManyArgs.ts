import { DepartmentUnitWhereInput } from "./DepartmentUnitWhereInput";
import { DepartmentUnitOrderByInput } from "./DepartmentUnitOrderByInput";

export type DepartmentUnitFindManyArgs = {
  where?: DepartmentUnitWhereInput;
  orderBy?: Array<DepartmentUnitOrderByInput>;
  skip?: number;
  take?: number;
};
