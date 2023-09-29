import { SortOrder } from "../../util/SortOrder";

export type IniDisciplinaryActionOrderByInput = {
  applicationId?: SortOrder;
  id?: SortOrder;
  retraction?: SortOrder;
  retractionDescription?: SortOrder;
  sanction?: SortOrder;
  sanctionDescription?: SortOrder;
};
