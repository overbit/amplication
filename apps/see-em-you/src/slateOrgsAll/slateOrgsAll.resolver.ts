import * as graphql from "@nestjs/graphql";
import { SlateOrgsAllResolverBase } from "./base/slateOrgsAll.resolver.base";
import { SlateOrgsAll } from "./base/SlateOrgsAll";
import { SlateOrgsAllService } from "./slateOrgsAll.service";

@graphql.Resolver(() => SlateOrgsAll)
export class SlateOrgsAllResolver extends SlateOrgsAllResolverBase {
  constructor(protected readonly service: SlateOrgsAllService) {
    super(service);
  }
}
