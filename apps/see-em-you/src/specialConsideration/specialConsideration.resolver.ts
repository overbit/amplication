import * as graphql from "@nestjs/graphql";
import { SpecialConsiderationResolverBase } from "./base/specialConsideration.resolver.base";
import { SpecialConsideration } from "./base/SpecialConsideration";
import { SpecialConsiderationService } from "./specialConsideration.service";

@graphql.Resolver(() => SpecialConsideration)
export class SpecialConsiderationResolver extends SpecialConsiderationResolverBase {
  constructor(protected readonly service: SpecialConsiderationService) {
    super(service);
  }
}
