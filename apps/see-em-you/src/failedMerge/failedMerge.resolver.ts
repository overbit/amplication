import * as graphql from "@nestjs/graphql";
import { FailedMergeResolverBase } from "./base/failedMerge.resolver.base";
import { FailedMerge } from "./base/FailedMerge";
import { FailedMergeService } from "./failedMerge.service";

@graphql.Resolver(() => FailedMerge)
export class FailedMergeResolver extends FailedMergeResolverBase {
  constructor(protected readonly service: FailedMergeService) {
    super(service);
  }
}
