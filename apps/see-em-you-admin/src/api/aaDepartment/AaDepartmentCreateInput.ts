import { PeriodWhereUniqueInput } from "../period/PeriodWhereUniqueInput";
import { DepartmentWhereUniqueInput } from "../department/DepartmentWhereUniqueInput";

export type AaDepartmentCreateInput = {
  period?: PeriodWhereUniqueInput | null;
  department: DepartmentWhereUniqueInput;
};
