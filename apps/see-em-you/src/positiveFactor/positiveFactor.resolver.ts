import * as graphql from "@nestjs/graphql";
import { PositiveFactorResolverBase } from "./base/positiveFactor.resolver.base";
import { PositiveFactor } from "./base/PositiveFactor";
import { PositiveFactorService } from "./positiveFactor.service";

@graphql.Resolver(() => PositiveFactor)
export class PositiveFactorResolver extends PositiveFactorResolverBase {
  constructor(protected readonly service: PositiveFactorService) {
    super(service);
  }
}
