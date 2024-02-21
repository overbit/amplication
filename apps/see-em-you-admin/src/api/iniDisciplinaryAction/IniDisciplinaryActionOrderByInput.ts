import { SortOrder } from "../../util/SortOrder";

export type IniDisciplinaryActionOrderByInput = {
  applicationId?: SortOrder;
  sanction?: SortOrder;
  sanctionDescription?: SortOrder;
  retraction?: SortOrder;
  retractionDescription?: SortOrder;
  id?: SortOrder;
};
