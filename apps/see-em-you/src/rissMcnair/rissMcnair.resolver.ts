import * as graphql from "@nestjs/graphql";
import { RissMcnairResolverBase } from "./base/rissMcnair.resolver.base";
import { RissMcnair } from "./base/RissMcnair";
import { RissMcnairService } from "./rissMcnair.service";

@graphql.Resolver(() => RissMcnair)
export class RissMcnairResolver extends RissMcnairResolverBase {
  constructor(protected readonly service: RissMcnairService) {
    super(service);
  }
}
