import { VoucherApplication as TVoucherApplication } from "../api/voucherApplication/VoucherApplication";

export const VOUCHERAPPLICATION_TITLE_FIELD = "id";

export const VoucherApplicationTitle = (
  record: TVoucherApplication
): string => {
  return record.id?.toString() || String(record.id);
};
