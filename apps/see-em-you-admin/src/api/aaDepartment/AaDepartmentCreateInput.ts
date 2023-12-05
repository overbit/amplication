import { DepartmentWhereUniqueInput } from "../department/DepartmentWhereUniqueInput";
import { PeriodWhereUniqueInput } from "../period/PeriodWhereUniqueInput";

export type AaDepartmentCreateInput = {
  department: DepartmentWhereUniqueInput;
  period?: PeriodWhereUniqueInput | null;
};
