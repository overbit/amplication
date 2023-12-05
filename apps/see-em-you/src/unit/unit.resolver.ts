import * as graphql from "@nestjs/graphql";
import { UnitResolverBase } from "./base/unit.resolver.base";
import { Unit } from "./base/Unit";
import { UnitService } from "./unit.service";

@graphql.Resolver(() => Unit)
export class UnitResolver extends UnitResolverBase {
  constructor(protected readonly service: UnitService) {
    super(service);
  }
}
