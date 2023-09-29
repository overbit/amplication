import * as graphql from "@nestjs/graphql";
import { SlateCodilityResolverBase } from "./base/slateCodility.resolver.base";
import { SlateCodility } from "./base/SlateCodility";
import { SlateCodilityService } from "./slateCodility.service";

@graphql.Resolver(() => SlateCodility)
export class SlateCodilityResolver extends SlateCodilityResolverBase {
  constructor(protected readonly service: SlateCodilityService) {
    super(service);
  }
}
