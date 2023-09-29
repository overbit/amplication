export type CcTransactionSummaryCreateInput = {
  authAmount?: number | null;
  authCode?: string | null;
  authMessage?: string | null;
  ccId: number;
  creditAmount?: number | null;
  date: Date;
  paymentId: number;
  reportDate: Date;
  settleAmount?: number | null;
  settleCode?: string | null;
  settleMessage?: string | null;
  time: Date;
};
