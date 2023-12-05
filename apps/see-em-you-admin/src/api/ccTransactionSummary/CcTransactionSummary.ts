export type CcTransactionSummary = {
  authAmount: number | null;
  authCode: string | null;
  authMessage: string | null;
  ccId: number;
  creditAmount: number | null;
  date: Date;
  id: string;
  paymentId: number;
  reportDate: Date;
  settleAmount: number | null;
  settleCode: string | null;
  settleMessage: string | null;
  time: Date;
};
