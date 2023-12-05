import * as graphql from "@nestjs/graphql";
import { MseCodilityResolverBase } from "./base/mseCodility.resolver.base";
import { MseCodility } from "./base/MseCodility";
import { MseCodilityService } from "./mseCodility.service";

@graphql.Resolver(() => MseCodility)
export class MseCodilityResolver extends MseCodilityResolverBase {
  constructor(protected readonly service: MseCodilityService) {
    super(service);
  }
}
