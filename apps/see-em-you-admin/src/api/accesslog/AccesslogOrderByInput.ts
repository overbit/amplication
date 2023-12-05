import { SortOrder } from "../../util/SortOrder";

export type AccesslogOrderByInput = {
  activity?: SortOrder;
  applicationId?: SortOrder;
  client?: SortOrder;
  domain?: SortOrder;
  eventtime?: SortOrder;
  id?: SortOrder;
  lastsrv?: SortOrder;
  luUsersUsertypesId?: SortOrder;
  ra?: SortOrder;
  referer?: SortOrder;
  sa?: SortOrder;
  usersId?: SortOrder;
  usertypeId?: SortOrder;
  xforward?: SortOrder;
};
