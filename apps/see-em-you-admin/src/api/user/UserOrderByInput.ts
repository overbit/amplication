import { SortOrder } from "../../util/SortOrder";

export type UserOrderByInput = {
  email?: SortOrder;
  firstname?: SortOrder;
  firstNamePref?: SortOrder;
  guid?: SortOrder;
  id?: SortOrder;
  initials?: SortOrder;
  lastname?: SortOrder;
  middlename?: SortOrder;
  signupDate?: SortOrder;
  suffix?: SortOrder;
  title?: SortOrder;
  verified?: SortOrder;
};
