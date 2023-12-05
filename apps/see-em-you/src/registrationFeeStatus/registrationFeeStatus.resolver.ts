import * as graphql from "@nestjs/graphql";
import { RegistrationFeeStatusResolverBase } from "./base/registrationFeeStatus.resolver.base";
import { RegistrationFeeStatus } from "./base/RegistrationFeeStatus";
import { RegistrationFeeStatusService } from "./registrationFeeStatus.service";

@graphql.Resolver(() => RegistrationFeeStatus)
export class RegistrationFeeStatusResolver extends RegistrationFeeStatusResolverBase {
  constructor(protected readonly service: RegistrationFeeStatusService) {
    super(service);
  }
}
