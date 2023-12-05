import { CcPaymentStatus as TCcPaymentStatus } from "../api/ccPaymentStatus/CcPaymentStatus";

export const CCPAYMENTSTATUS_TITLE_FIELD = "id";

export const CcPaymentStatusTitle = (record: TCcPaymentStatus): string => {
  return record.id?.toString() || String(record.id);
};
