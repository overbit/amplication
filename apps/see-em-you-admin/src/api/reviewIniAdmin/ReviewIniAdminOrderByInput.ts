import { SortOrder } from "../../util/SortOrder";

export type ReviewIniAdminOrderByInput = {
  applicationId?: SortOrder;
  reviewerId?: SortOrder;
  departmentId?: SortOrder;
  round?: SortOrder;
  comments?: SortOrder;
  id?: SortOrder;
};
