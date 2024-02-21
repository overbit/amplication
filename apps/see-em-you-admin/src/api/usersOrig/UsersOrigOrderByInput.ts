import { SortOrder } from "../../util/SortOrder";

export type UsersOrigOrderByInput = {
  email?: SortOrder;
  username?: SortOrder;
  password?: SortOrder;
  title?: SortOrder;
  firstname?: SortOrder;
  middlename?: SortOrder;
  lastname?: SortOrder;
  initials?: SortOrder;
  signupDate?: SortOrder;
  verified?: SortOrder;
  guid?: SortOrder;
  id?: SortOrder;
};
