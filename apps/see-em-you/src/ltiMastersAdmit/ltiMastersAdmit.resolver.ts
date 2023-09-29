import * as graphql from "@nestjs/graphql";
import { LtiMastersAdmitResolverBase } from "./base/ltiMastersAdmit.resolver.base";
import { LtiMastersAdmit } from "./base/LtiMastersAdmit";
import { LtiMastersAdmitService } from "./ltiMastersAdmit.service";

@graphql.Resolver(() => LtiMastersAdmit)
export class LtiMastersAdmitResolver extends LtiMastersAdmitResolverBase {
  constructor(protected readonly service: LtiMastersAdmitService) {
    super(service);
  }
}
