import * as graphql from "@nestjs/graphql";
import { EthnicityResolverBase } from "./base/ethnicity.resolver.base";
import { Ethnicity } from "./base/Ethnicity";
import { EthnicityService } from "./ethnicity.service";

@graphql.Resolver(() => Ethnicity)
export class EthnicityResolver extends EthnicityResolverBase {
  constructor(protected readonly service: EthnicityService) {
    super(service);
  }
}
