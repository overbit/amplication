import { DepartmentWhereUniqueInput } from "../department/DepartmentWhereUniqueInput";
import { PeriodWhereUniqueInput } from "../period/PeriodWhereUniqueInput";

export type AaDepartmentWhereInput = {
  department?: DepartmentWhereUniqueInput;
  period?: PeriodWhereUniqueInput;
};
