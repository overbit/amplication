import { Application } from "../application/Application";

export type CashnetPayment = {
  transactionId: number;
  applicantName: string;
  applicantEmail: string;
  merchant: number;
  status: string;
  transactionTime: Date;
  transactionType: string;
  amount: number | null;
  application?: Application;
  id: number;
};
