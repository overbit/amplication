import { ApplicationWhereUniqueInput } from "../application/ApplicationWhereUniqueInput";

export type CashnetPaymentUpdateInput = {
  transactionId?: number;
  applicantName?: string;
  applicantEmail?: string;
  merchant?: number;
  status?: string;
  transactionType?: string;
  amount?: number | null;
  application?: ApplicationWhereUniqueInput;
};
