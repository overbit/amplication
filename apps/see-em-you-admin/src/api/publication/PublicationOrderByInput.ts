import { SortOrder } from "../../util/SortOrder";

export type PublicationOrderByInput = {
  title?: SortOrder;
  author?: SortOrder;
  forum?: SortOrder;
  citation?: SortOrder;
  url?: SortOrder;
  status?: SortOrder;
  typeField?: SortOrder;
  typeOther?: SortOrder;
  datafileId?: SortOrder;
  application_id?: SortOrder;
  id?: SortOrder;
};
