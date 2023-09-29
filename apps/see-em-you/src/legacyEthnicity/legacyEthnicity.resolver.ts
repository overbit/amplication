import * as graphql from "@nestjs/graphql";
import { LegacyEthnicityResolverBase } from "./base/legacyEthnicity.resolver.base";
import { LegacyEthnicity } from "./base/LegacyEthnicity";
import { LegacyEthnicityService } from "./legacyEthnicity.service";

@graphql.Resolver(() => LegacyEthnicity)
export class LegacyEthnicityResolver extends LegacyEthnicityResolverBase {
  constructor(protected readonly service: LegacyEthnicityService) {
    super(service);
  }
}
