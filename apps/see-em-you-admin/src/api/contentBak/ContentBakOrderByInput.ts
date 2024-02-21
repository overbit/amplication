import { SortOrder } from "../../util/SortOrder";

export type ContentBakOrderByInput = {
  name?: SortOrder;
  content?: SortOrder;
  contenttypeId?: SortOrder;
  domainId?: SortOrder;
  modifieddate?: SortOrder;
  modifiedby?: SortOrder;
  departmentId?: SortOrder;
  id?: SortOrder;
};
