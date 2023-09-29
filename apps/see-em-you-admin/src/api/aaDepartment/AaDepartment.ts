import { Department } from "../department/Department";
import { Period } from "../period/Period";

export type AaDepartment = {
  department?: Department;
  id: number;
  period?: Period | null;
};
