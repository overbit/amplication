import { RegistrationFeePaymentWhereInput } from "./RegistrationFeePaymentWhereInput";
import { RegistrationFeePaymentOrderByInput } from "./RegistrationFeePaymentOrderByInput";

export type RegistrationFeePaymentFindManyArgs = {
  where?: RegistrationFeePaymentWhereInput;
  orderBy?: Array<RegistrationFeePaymentOrderByInput>;
  skip?: number;
  take?: number;
};
