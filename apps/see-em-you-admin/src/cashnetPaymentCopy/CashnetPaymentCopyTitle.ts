import { CashnetPaymentCopy as TCashnetPaymentCopy } from "../api/cashnetPaymentCopy/CashnetPaymentCopy";

export const CASHNETPAYMENTCOPY_TITLE_FIELD = "applicantName";

export const CashnetPaymentCopyTitle = (
  record: TCashnetPaymentCopy
): string => {
  return record.applicantName?.toString() || String(record.id);
};
