import { SortOrder } from "../../util/SortOrder";

export type AccesslogOrderByInput = {
  id?: SortOrder;
  usersId?: SortOrder;
  luUsersUsertypesId?: SortOrder;
  usertypeId?: SortOrder;
  applicationId?: SortOrder;
  client?: SortOrder;
  eventtime?: SortOrder;
  activity?: SortOrder;
  domain?: SortOrder;
  referer?: SortOrder;
  xforward?: SortOrder;
  sa?: SortOrder;
  ra?: SortOrder;
  lastsrv?: SortOrder;
};
