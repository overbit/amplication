import { SortOrder } from "../../util/SortOrder";

export type ApplicationDecisionIniOrderByInput = {
  applicationId?: SortOrder;
  admissionProgramId?: SortOrder;
  choice?: SortOrder;
  admissionStatus?: SortOrder;
  comments?: SortOrder;
  scholarshipAmt?: SortOrder;
  scholarshipComments?: SortOrder;
  timestamp?: SortOrder;
  id?: SortOrder;
};
