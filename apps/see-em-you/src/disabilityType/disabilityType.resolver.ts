import * as graphql from "@nestjs/graphql";
import { DisabilityTypeResolverBase } from "./base/disabilityType.resolver.base";
import { DisabilityType } from "./base/DisabilityType";
import { DisabilityTypeService } from "./disabilityType.service";

@graphql.Resolver(() => DisabilityType)
export class DisabilityTypeResolver extends DisabilityTypeResolverBase {
  constructor(protected readonly service: DisabilityTypeService) {
    super(service);
  }
}
