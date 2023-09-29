import { PaymentItemWhereInput } from "./PaymentItemWhereInput";
import { PaymentItemOrderByInput } from "./PaymentItemOrderByInput";

export type PaymentItemFindManyArgs = {
  where?: PaymentItemWhereInput;
  orderBy?: Array<PaymentItemOrderByInput>;
  skip?: number;
  take?: number;
};
