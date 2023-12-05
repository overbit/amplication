import * as graphql from "@nestjs/graphql";
import { MitsSlateCodilityResolverBase } from "./base/mitsSlateCodility.resolver.base";
import { MitsSlateCodility } from "./base/MitsSlateCodility";
import { MitsSlateCodilityService } from "./mitsSlateCodility.service";

@graphql.Resolver(() => MitsSlateCodility)
export class MitsSlateCodilityResolver extends MitsSlateCodilityResolverBase {
  constructor(protected readonly service: MitsSlateCodilityService) {
    super(service);
  }
}
