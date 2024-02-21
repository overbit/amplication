import { SortOrder } from "../../util/SortOrder";

export type IniFinancialSupportOrderByInput = {
  applicationId?: SortOrder;
  requestConsideration?: SortOrder;
  attendWithoutSupport?: SortOrder;
  receiveOutsideSupportType?: SortOrder;
  receiveOutsideSupportSource?: SortOrder;
  applyOutsideSupportType?: SortOrder;
  applyOutsideSupportSource?: SortOrder;
  otherSupportSource?: SortOrder;
  familySupportType?: SortOrder;
  familySupportAmount?: SortOrder;
  id?: SortOrder;
};
