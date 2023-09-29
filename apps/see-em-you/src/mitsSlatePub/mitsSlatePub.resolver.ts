import * as graphql from "@nestjs/graphql";
import { MitsSlatePubResolverBase } from "./base/mitsSlatePub.resolver.base";
import { MitsSlatePub } from "./base/MitsSlatePub";
import { MitsSlatePubService } from "./mitsSlatePub.service";

@graphql.Resolver(() => MitsSlatePub)
export class MitsSlatePubResolver extends MitsSlatePubResolverBase {
  constructor(protected readonly service: MitsSlatePubService) {
    super(service);
  }
}
