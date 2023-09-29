import { AaDepartmentUpdateManyWithoutDepartmentsInput } from "./AaDepartmentUpdateManyWithoutDepartmentsInput";

export type DepartmentUpdateInput = {
  aaDepartment?: AaDepartmentUpdateManyWithoutDepartmentsInput;
  allowRequestAdvisors?: number | null;
  ccEmail?: string | null;
  drank?: number;
  enableFinal?: string | null;
  enableRound1?: string | null;
  enableRound2?: string | null;
  enableRound3?: string | null;
  enableRound4?: string | null;
  name?: string;
  oraclestring?: string | null;
  parentSchoolId?: number;
  registrationoraclestring?: string | null;
  semiblindReview?: string | null;
};
