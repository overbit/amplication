import { Application } from "../application/Application";

export type CashnetPayment = {
  amount: number | null;
  applicantEmail: string;
  applicantName: string;
  application?: Application;
  id: number;
  merchant: number;
  status: string;
  transactionId: number;
  transactionTime: Date;
  transactionType: string;
};
