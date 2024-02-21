import { SortOrder } from "../../util/SortOrder";

export type UserOrderByInput = {
  email?: SortOrder;
  title?: SortOrder;
  firstname?: SortOrder;
  middlename?: SortOrder;
  lastname?: SortOrder;
  suffix?: SortOrder;
  initials?: SortOrder;
  signupDate?: SortOrder;
  verified?: SortOrder;
  guid?: SortOrder;
  firstNamePref?: SortOrder;
  id?: SortOrder;
};
