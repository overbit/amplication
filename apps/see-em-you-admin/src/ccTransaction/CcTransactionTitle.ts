import { CcTransaction as TCcTransaction } from "../api/ccTransaction/CcTransaction";

export const CCTRANSACTION_TITLE_FIELD = "cardholderNameLast";

export const CcTransactionTitle = (record: TCcTransaction): string => {
  return record.cardholderNameLast?.toString() || String(record.id);
};
