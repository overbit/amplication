import { SortOrder } from "../../util/SortOrder";

export type Em2FinancialSupportOrderByInput = {
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
  requestAssistantship?: SortOrder;
  requestConsideration?: SortOrder;
};
