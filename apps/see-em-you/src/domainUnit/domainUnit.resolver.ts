import * as graphql from "@nestjs/graphql";
import { DomainUnitResolverBase } from "./base/domainUnit.resolver.base";
import { DomainUnit } from "./base/DomainUnit";
import { DomainUnitService } from "./domainUnit.service";

@graphql.Resolver(() => DomainUnit)
export class DomainUnitResolver extends DomainUnitResolverBase {
  constructor(protected readonly service: DomainUnitService) {
    super(service);
  }
}
