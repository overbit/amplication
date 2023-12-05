import * as graphql from "@nestjs/graphql";
import { MergeDatafileResolverBase } from "./base/mergeDatafile.resolver.base";
import { MergeDatafile } from "./base/MergeDatafile";
import { MergeDatafileService } from "./mergeDatafile.service";

@graphql.Resolver(() => MergeDatafile)
export class MergeDatafileResolver extends MergeDatafileResolverBase {
  constructor(protected readonly service: MergeDatafileService) {
    super(service);
  }
}
