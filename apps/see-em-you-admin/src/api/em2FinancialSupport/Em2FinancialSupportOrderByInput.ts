import { SortOrder } from "../../util/SortOrder";

export type Em2FinancialSupportOrderByInput = {
  applicationId?: SortOrder;
  requestConsideration?: SortOrder;
  requestAssistantship?: SortOrder;
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
