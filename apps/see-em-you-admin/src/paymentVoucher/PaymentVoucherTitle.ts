import { PaymentVoucher as TPaymentVoucher } from "../api/paymentVoucher/PaymentVoucher";

export const PAYMENTVOUCHER_TITLE_FIELD = "id";

export const PaymentVoucherTitle = (record: TPaymentVoucher): string => {
  return record.id?.toString() || String(record.id);
};
