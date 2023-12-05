import { PaymentItem as TPaymentItem } from "../api/paymentItem/PaymentItem";

export const PAYMENTITEM_TITLE_FIELD = "id";

export const PaymentItemTitle = (record: TPaymentItem): string => {
  return record.id?.toString() || String(record.id);
};
