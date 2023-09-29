import * as graphql from "@nestjs/graphql";
import { ReclogResolverBase } from "./base/reclog.resolver.base";
import { Reclog } from "./base/Reclog";
import { ReclogService } from "./reclog.service";

@graphql.Resolver(() => Reclog)
export class ReclogResolver extends ReclogResolverBase {
  constructor(protected readonly service: ReclogService) {
    super(service);
  }
}
