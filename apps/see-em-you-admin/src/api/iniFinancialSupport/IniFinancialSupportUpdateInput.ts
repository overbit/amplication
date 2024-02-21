export type IniFinancialSupportUpdateInput = {
  applicationId?: number;
  requestConsideration?: number;
  attendWithoutSupport?: number;
  receiveOutsideSupportType?: string | null;
  receiveOutsideSupportSource?: string | null;
  applyOutsideSupportType?: string | null;
  applyOutsideSupportSource?: string | null;
  otherSupportSource?: string | null;
  familySupportType?: string | null;
  familySupportAmount?: string | null;
};
