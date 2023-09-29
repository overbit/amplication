import { RegistrationFeePayment as TRegistrationFeePayment } from "../api/registrationFeePayment/RegistrationFeePayment";

export const REGISTRATIONFEEPAYMENT_TITLE_FIELD = "id";

export const RegistrationFeePaymentTitle = (
  record: TRegistrationFeePayment
): string => {
  return record.id?.toString() || String(record.id);
};
