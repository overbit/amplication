import * as graphql from "@nestjs/graphql";
import { DisabilityResolverBase } from "./base/disability.resolver.base";
import { Disability } from "./base/Disability";
import { DisabilityService } from "./disability.service";

@graphql.Resolver(() => Disability)
export class DisabilityResolver extends DisabilityResolverBase {
  constructor(protected readonly service: DisabilityService) {
    super(service);
  }
}
