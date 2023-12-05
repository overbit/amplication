import { PaymentNew as TPaymentNew } from "../api/paymentNew/PaymentNew";

export const PAYMENTNEW_TITLE_FIELD = "id";

export const PaymentNewTitle = (record: TPaymentNew): string => {
  return record.id?.toString() || String(record.id);
};
