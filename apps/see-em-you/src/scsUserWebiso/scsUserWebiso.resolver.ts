import * as graphql from "@nestjs/graphql";
import { ScsUserWebisoResolverBase } from "./base/scsUserWebiso.resolver.base";
import { ScsUserWebiso } from "./base/ScsUserWebiso";
import { ScsUserWebisoService } from "./scsUserWebiso.service";

@graphql.Resolver(() => ScsUserWebiso)
export class ScsUserWebisoResolver extends ScsUserWebisoResolverBase {
  constructor(protected readonly service: ScsUserWebisoService) {
    super(service);
  }
}
