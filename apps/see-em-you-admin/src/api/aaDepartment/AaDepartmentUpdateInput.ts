import { PeriodWhereUniqueInput } from "../period/PeriodWhereUniqueInput";
import { DepartmentWhereUniqueInput } from "../department/DepartmentWhereUniqueInput";

export type AaDepartmentUpdateInput = {
  period?: PeriodWhereUniqueInput | null;
  department?: DepartmentWhereUniqueInput;
};
