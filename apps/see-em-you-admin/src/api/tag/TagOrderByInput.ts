import { SortOrder } from "../../util/SortOrder";

export type TagOrderByInput = {
  category?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  parent?: SortOrder;
  sticky?: SortOrder;
  typeField?: SortOrder;
};
