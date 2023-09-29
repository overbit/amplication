import * as graphql from "@nestjs/graphql";
import { MergeResolverBase } from "./base/merge.resolver.base";
import { Merge } from "./base/Merge";
import { MergeService } from "./merge.service";

@graphql.Resolver(() => Merge)
export class MergeResolver extends MergeResolverBase {
  constructor(protected readonly service: MergeService) {
    super(service);
  }
}
