export type CashnetPaymentCopy = {
  amount: number | null;
  appId: number;
  applicantEmail: string;
  applicantName: string;
  id: number;
  merchant: number;
  status: string;
  transactionId: number;
  transactionTime: Date;
  transactionType: string;
};
