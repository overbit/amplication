import { AaDepartmentUpdateManyWithoutDepartmentsInput } from "./AaDepartmentUpdateManyWithoutDepartmentsInput";

export type DepartmentUpdateInput = {
  name?: string;
  parentSchoolId?: number;
  oraclestring?: string | null;
  registrationoraclestring?: string | null;
  drank?: number;
  ccEmail?: string | null;
  enableRound1?: string | null;
  enableRound2?: string | null;
  enableRound3?: string | null;
  enableRound4?: string | null;
  enableFinal?: string | null;
  semiblindReview?: string | null;
  allowRequestAdvisors?: number | null;
  aaDepartment?: AaDepartmentUpdateManyWithoutDepartmentsInput;
};
