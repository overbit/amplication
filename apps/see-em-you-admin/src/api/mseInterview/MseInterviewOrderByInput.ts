import { SortOrder } from "../../util/SortOrder";

export type MseInterviewOrderByInput = {
  applicationId?: SortOrder;
  reviewerId?: SortOrder;
  interviewDate?: SortOrder;
  interviewType?: SortOrder;
  interviewTypeOther?: SortOrder;
  interviewComments?: SortOrder;
  id?: SortOrder;
};
