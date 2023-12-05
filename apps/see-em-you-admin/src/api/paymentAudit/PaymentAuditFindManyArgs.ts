import { PaymentAuditWhereInput } from "./PaymentAuditWhereInput";
import { PaymentAuditOrderByInput } from "./PaymentAuditOrderByInput";

export type PaymentAuditFindManyArgs = {
  where?: PaymentAuditWhereInput;
  orderBy?: Array<PaymentAuditOrderByInput>;
  skip?: number;
  take?: number;
};
