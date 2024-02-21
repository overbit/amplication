import { SortOrder } from "../../util/SortOrder";

export type AdmissionLetterOrderByInput = {
  applicationId?: SortOrder;
  departmentId?: SortOrder;
  sections?: SortOrder;
  id?: SortOrder;
};
