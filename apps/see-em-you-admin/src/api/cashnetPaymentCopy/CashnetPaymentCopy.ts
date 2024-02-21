export type CashnetPaymentCopy = {
  appId: number;
  transactionId: number;
  applicantName: string;
  applicantEmail: string;
  merchant: number;
  status: string;
  transactionTime: Date;
  transactionType: string;
  amount: number | null;
  id: number;
};
