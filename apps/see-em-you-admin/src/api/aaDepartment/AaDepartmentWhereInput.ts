import { PeriodWhereUniqueInput } from "../period/PeriodWhereUniqueInput";
import { DepartmentWhereUniqueInput } from "../department/DepartmentWhereUniqueInput";
import { IntFilter } from "../../util/IntFilter";

export type AaDepartmentWhereInput = {
  period?: PeriodWhereUniqueInput;
  department?: DepartmentWhereUniqueInput;
  id?: IntFilter;
};
