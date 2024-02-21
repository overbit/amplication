import { SortOrder } from "../../util/SortOrder";

export type CountryOrderByInput = {
  name?: SortOrder;
  isoCode?: SortOrder;
  id?: SortOrder;
};
