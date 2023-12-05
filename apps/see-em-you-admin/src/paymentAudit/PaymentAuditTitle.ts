import { PaymentAudit as TPaymentAudit } from "../api/paymentAudit/PaymentAudit";

export const PAYMENTAUDIT_TITLE_FIELD = "id";

export const PaymentAuditTitle = (record: TPaymentAudit): string => {
  return record.id?.toString() || String(record.id);
};
