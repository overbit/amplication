import { SortOrder } from "../../util/SortOrder";

export type ApplicationDecisionIniOrderByInput = {
  admissionProgramId?: SortOrder;
  admissionStatus?: SortOrder;
  applicationId?: SortOrder;
  choice?: SortOrder;
  comments?: SortOrder;
  id?: SortOrder;
  scholarshipAmt?: SortOrder;
  scholarshipComments?: SortOrder;
  timestamp?: SortOrder;
};
