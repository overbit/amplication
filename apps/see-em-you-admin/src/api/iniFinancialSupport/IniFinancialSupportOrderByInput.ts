import { SortOrder } from "../../util/SortOrder";

export type IniFinancialSupportOrderByInput = {
  applicationId?: SortOrder;
  applyOutsideSupportSource?: SortOrder;
  applyOutsideSupportType?: SortOrder;
  attendWithoutSupport?: SortOrder;
  familySupportAmount?: SortOrder;
  familySupportType?: SortOrder;
  id?: SortOrder;
  otherSupportSource?: SortOrder;
  receiveOutsideSupportSource?: SortOrder;
  receiveOutsideSupportType?: SortOrder;
  requestConsideration?: SortOrder;
};
