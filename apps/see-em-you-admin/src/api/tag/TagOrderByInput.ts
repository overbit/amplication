import { SortOrder } from "../../util/SortOrder";

export type TagOrderByInput = {
  name?: SortOrder;
  sticky?: SortOrder;
  typeField?: SortOrder;
  category?: SortOrder;
  parent?: SortOrder;
  id?: SortOrder;
};
