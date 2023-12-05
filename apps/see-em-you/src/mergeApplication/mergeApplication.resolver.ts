import * as graphql from "@nestjs/graphql";
import { MergeApplicationResolverBase } from "./base/mergeApplication.resolver.base";
import { MergeApplication } from "./base/MergeApplication";
import { MergeApplicationService } from "./mergeApplication.service";

@graphql.Resolver(() => MergeApplication)
export class MergeApplicationResolver extends MergeApplicationResolverBase {
  constructor(protected readonly service: MergeApplicationService) {
    super(service);
  }
}
