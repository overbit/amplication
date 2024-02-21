import { SortOrder } from "../../util/SortOrder";

export type LuApplicationProgramsHistoryOrderByInput = {
  lapId?: SortOrder;
  applicationId?: SortOrder;
  programId?: SortOrder;
  choice?: SortOrder;
  deletedBy?: SortOrder;
  createdDate?: SortOrder;
  id?: SortOrder;
};
