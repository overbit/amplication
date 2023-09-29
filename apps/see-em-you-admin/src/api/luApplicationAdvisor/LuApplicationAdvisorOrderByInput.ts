import { SortOrder } from "../../util/SortOrder";

export type LuApplicationAdvisorOrderByInput = {
  advisorType?: SortOrder;
  advisorUserId?: SortOrder;
  application_id?: SortOrder;
  choice?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  programId?: SortOrder;
};
