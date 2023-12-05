import { VoucherProgram as TVoucherProgram } from "../api/voucherProgram/VoucherProgram";

export const VOUCHERPROGRAM_TITLE_FIELD = "id";

export const VoucherProgramTitle = (record: TVoucherProgram): string => {
  return record.id?.toString() || String(record.id);
};
