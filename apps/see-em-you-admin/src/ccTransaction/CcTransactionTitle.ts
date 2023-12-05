import { CcTransaction as TCcTransaction } from "../api/ccTransaction/CcTransaction";

export const CCTRANSACTION_TITLE_FIELD = "cardholderNameFirst";

export const CcTransactionTitle = (record: TCcTransaction): string => {
  return record.cardholderNameFirst?.toString() || String(record.id);
};
