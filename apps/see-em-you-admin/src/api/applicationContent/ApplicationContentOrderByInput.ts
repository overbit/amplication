import { SortOrder } from "../../util/SortOrder";

export type ApplicationContentOrderByInput = {
  id?: SortOrder;
  sectionIdentifier?: SortOrder;
  programId?: SortOrder;
  desired?: SortOrder;
  required?: SortOrder;
};
