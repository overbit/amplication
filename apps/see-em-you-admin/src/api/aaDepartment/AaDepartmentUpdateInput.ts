import { DepartmentWhereUniqueInput } from "../department/DepartmentWhereUniqueInput";
import { PeriodWhereUniqueInput } from "../period/PeriodWhereUniqueInput";

export type AaDepartmentUpdateInput = {
  department?: DepartmentWhereUniqueInput;
  period?: PeriodWhereUniqueInput | null;
};
