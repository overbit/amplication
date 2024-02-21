import { SortOrder } from "../../util/SortOrder";

export type HighschoolOrderByInput = {
  appId?: SortOrder;
  hsName?: SortOrder;
  hsCeeb?: SortOrder;
  hsNces?: SortOrder;
  hsState?: SortOrder;
  hsZip?: SortOrder;
  hsGradYear?: SortOrder;
  hsDuration?: SortOrder;
  graduated?: SortOrder;
  created?: SortOrder;
  modified?: SortOrder;
  id?: SortOrder;
};
