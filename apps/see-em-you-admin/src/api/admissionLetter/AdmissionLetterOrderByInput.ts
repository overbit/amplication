import { SortOrder } from "../../util/SortOrder";

export type AdmissionLetterOrderByInput = {
  applicationId?: SortOrder;
  departmentId?: SortOrder;
  id?: SortOrder;
  sections?: SortOrder;
};
