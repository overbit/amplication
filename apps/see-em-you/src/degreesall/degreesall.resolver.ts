import * as graphql from "@nestjs/graphql";
import { DegreesallResolverBase } from "./base/degreesall.resolver.base";
import { Degreesall } from "./base/Degreesall";
import { DegreesallService } from "./degreesall.service";

@graphql.Resolver(() => Degreesall)
export class DegreesallResolver extends DegreesallResolverBase {
  constructor(protected readonly service: DegreesallService) {
    super(service);
  }
}
