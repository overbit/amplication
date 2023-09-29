import * as graphql from "@nestjs/graphql";
import { RegistrationFeePaymentResolverBase } from "./base/registrationFeePayment.resolver.base";
import { RegistrationFeePayment } from "./base/RegistrationFeePayment";
import { RegistrationFeePaymentService } from "./registrationFeePayment.service";

@graphql.Resolver(() => RegistrationFeePayment)
export class RegistrationFeePaymentResolver extends RegistrationFeePaymentResolverBase {
  constructor(protected readonly service: RegistrationFeePaymentService) {
    super(service);
  }
}
