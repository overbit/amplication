import * as graphql from "@nestjs/graphql";
import { RissFundingResolverBase } from "./base/rissFunding.resolver.base";
import { RissFunding } from "./base/RissFunding";
import { RissFundingService } from "./rissFunding.service";

@graphql.Resolver(() => RissFunding)
export class RissFundingResolver extends RissFundingResolverBase {
  constructor(protected readonly service: RissFundingService) {
    super(service);
  }
}
