import { SortOrder } from "../../util/SortOrder";

export type WaiverApplicationOrderByInput = {
  id?: SortOrder;
  applicationId?: SortOrder;
  orgId?: SortOrder;
  datafileId?: SortOrder;
  createDate?: SortOrder;
  updateDate?: SortOrder;
};
