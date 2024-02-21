import { SortOrder } from "../../util/SortOrder";

export type DepartmentOrderByInput = {
  name?: SortOrder;
  parentSchoolId?: SortOrder;
  oraclestring?: SortOrder;
  registrationoraclestring?: SortOrder;
  drank?: SortOrder;
  ccEmail?: SortOrder;
  enableRound1?: SortOrder;
  enableRound2?: SortOrder;
  enableRound3?: SortOrder;
  enableRound4?: SortOrder;
  enableFinal?: SortOrder;
  semiblindReview?: SortOrder;
  allowRequestAdvisors?: SortOrder;
  id?: SortOrder;
};
