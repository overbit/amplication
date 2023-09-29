export type IniFinancialSupportCreateInput = {
  applicationId: number;
  applyOutsideSupportSource?: string | null;
  applyOutsideSupportType?: string | null;
  attendWithoutSupport: number;
  familySupportAmount?: string | null;
  familySupportType?: string | null;
  otherSupportSource?: string | null;
  receiveOutsideSupportSource?: string | null;
  receiveOutsideSupportType?: string | null;
  requestConsideration: number;
};
