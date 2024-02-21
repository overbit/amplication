export type CcTransactionSummaryUpdateInput = {
  ccId?: number;
  date?: Date;
  time?: Date;
  reportDate?: Date;
  paymentId?: number;
  authCode?: string | null;
  authMessage?: string | null;
  settleCode?: string | null;
  settleMessage?: string | null;
  authAmount?: number | null;
  settleAmount?: number | null;
  creditAmount?: number | null;
};
