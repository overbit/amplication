import { CcTransactionDetail as TCcTransactionDetail } from "../api/ccTransactionDetail/CcTransactionDetail";

export const CCTRANSACTIONDETAIL_TITLE_FIELD = "itemName";

export const CcTransactionDetailTitle = (
  record: TCcTransactionDetail
): string => {
  return record.itemName?.toString() || String(record.id);
};
