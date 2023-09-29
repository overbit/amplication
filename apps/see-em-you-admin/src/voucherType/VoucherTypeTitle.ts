import { VoucherType as TVoucherType } from "../api/voucherType/VoucherType";

export const VOUCHERTYPE_TITLE_FIELD = "description";

export const VoucherTypeTitle = (record: TVoucherType): string => {
  return record.description?.toString() || String(record.id);
};
