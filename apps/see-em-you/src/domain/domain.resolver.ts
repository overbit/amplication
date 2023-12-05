import * as graphql from "@nestjs/graphql";
import { DomainResolverBase } from "./base/domain.resolver.base";
import { Domain } from "./base/Domain";
import { DomainService } from "./domain.service";

@graphql.Resolver(() => Domain)
export class DomainResolver extends DomainResolverBase {
  constructor(protected readonly service: DomainService) {
    super(service);
  }
}
