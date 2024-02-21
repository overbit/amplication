import { AaDepartmentListRelationFilter } from "../aaDepartment/AaDepartmentListRelationFilter";
import { IntFilter } from "../../util/IntFilter";

export type DepartmentWhereInput = {
  aaDepartment?: AaDepartmentListRelationFilter;
  id?: IntFilter;
};
