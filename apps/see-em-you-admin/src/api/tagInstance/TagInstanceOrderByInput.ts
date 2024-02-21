import { SortOrder } from "../../util/SortOrder";

export type TagInstanceOrderByInput = {
  tagId?: SortOrder;
  owner?: SortOrder;
  department?: SortOrder;
  period?: SortOrder;
  status?: SortOrder;
  id?: SortOrder;
};
