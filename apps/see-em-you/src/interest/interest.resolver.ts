import * as graphql from "@nestjs/graphql";
import { InterestResolverBase } from "./base/interest.resolver.base";
import { Interest } from "./base/Interest";
import { InterestService } from "./interest.service";

@graphql.Resolver(() => Interest)
export class InterestResolver extends InterestResolverBase {
  constructor(protected readonly service: InterestService) {
    super(service);
  }
}
