export type CashnetPaymentCopyCreateInput = {
  appId: number;
  transactionId: number;
  applicantName: string;
  applicantEmail: string;
  merchant: number;
  status: string;
  transactionType: string;
  amount?: number | null;
};
