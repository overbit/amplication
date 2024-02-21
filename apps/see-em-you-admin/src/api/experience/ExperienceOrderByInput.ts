import { SortOrder } from "../../util/SortOrder";

export type ExperienceOrderByInput = {
  datafileId?: SortOrder;
  experiencetype?: SortOrder;
  orderEntered?: SortOrder;
  company?: SortOrder;
  startDate?: SortOrder;
  endDate?: SortOrder;
  yearsExp?: SortOrder;
  address?: SortOrder;
  jobTitle?: SortOrder;
  jobDescription?: SortOrder;
  application_id?: SortOrder;
  id?: SortOrder;
};
