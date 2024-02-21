import { SortOrder } from "../../util/SortOrder";

export type TeachingExperienceOrderByInput = {
  applicationId?: SortOrder;
  orderEntered?: SortOrder;
  institution?: SortOrder;
  address?: SortOrder;
  coursesTaught?: SortOrder;
  startDate?: SortOrder;
  endDate?: SortOrder;
  id?: SortOrder;
};
