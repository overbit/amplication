import { SortOrder } from "../../util/SortOrder";

export type StateOrderByInput = {
  abbrev?: SortOrder;
  name?: SortOrder;
  countryId?: SortOrder;
  id?: SortOrder;
};
