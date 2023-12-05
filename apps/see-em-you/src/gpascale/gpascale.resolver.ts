import * as graphql from "@nestjs/graphql";
import { GpascaleResolverBase } from "./base/gpascale.resolver.base";
import { Gpascale } from "./base/Gpascale";
import { GpascaleService } from "./gpascale.service";

@graphql.Resolver(() => Gpascale)
export class GpascaleResolver extends GpascaleResolverBase {
  constructor(protected readonly service: GpascaleService) {
    super(service);
  }
}
