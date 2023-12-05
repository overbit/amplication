import { CcTransactionReport as TCcTransactionReport } from "../api/ccTransactionReport/CcTransactionReport";

export const CCTRANSACTIONREPORT_TITLE_FIELD = "id";

export const CcTransactionReportTitle = (
  record: TCcTransactionReport
): string => {
  return record.id?.toString() || String(record.id);
};
