import { SortOrder } from "../../util/SortOrder";

export type ReclogOrderByInput = {
  ip?: SortOrder;
  message?: SortOrder;
  created?: SortOrder;
  id?: SortOrder;
};
