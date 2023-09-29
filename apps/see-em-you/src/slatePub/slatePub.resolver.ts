import * as graphql from "@nestjs/graphql";
import { SlatePubResolverBase } from "./base/slatePub.resolver.base";
import { SlatePub } from "./base/SlatePub";
import { SlatePubService } from "./slatePub.service";

@graphql.Resolver(() => SlatePub)
export class SlatePubResolver extends SlatePubResolverBase {
  constructor(protected readonly service: SlatePubService) {
    super(service);
  }
}
