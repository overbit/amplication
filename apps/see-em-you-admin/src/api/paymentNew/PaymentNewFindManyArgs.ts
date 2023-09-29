import { PaymentNewWhereInput } from "./PaymentNewWhereInput";
import { PaymentNewOrderByInput } from "./PaymentNewOrderByInput";

export type PaymentNewFindManyArgs = {
  where?: PaymentNewWhereInput;
  orderBy?: Array<PaymentNewOrderByInput>;
  skip?: number;
  take?: number;
};
