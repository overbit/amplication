import { ApplicationWhereUniqueInput } from "../application/ApplicationWhereUniqueInput";

export type CashnetPaymentUpdateInput = {
  amount?: number | null;
  applicantEmail?: string;
  applicantName?: string;
  application?: ApplicationWhereUniqueInput;
  merchant?: number;
  status?: string;
  transactionId?: number;
  transactionType?: string;
};
