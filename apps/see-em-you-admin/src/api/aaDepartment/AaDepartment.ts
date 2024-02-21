import { Period } from "../period/Period";
import { Department } from "../department/Department";

export type AaDepartment = {
  period?: Period | null;
  department?: Department;
  id: number;
};
