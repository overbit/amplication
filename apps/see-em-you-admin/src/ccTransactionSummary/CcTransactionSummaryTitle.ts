import { CcTransactionSummary as TCcTransactionSummary } from "../api/ccTransactionSummary/CcTransactionSummary";

export const CCTRANSACTIONSUMMARY_TITLE_FIELD = "authCode";

export const CcTransactionSummaryTitle = (
  record: TCcTransactionSummary
): string => {
  return record.authCode?.toString() || String(record.id);
};
