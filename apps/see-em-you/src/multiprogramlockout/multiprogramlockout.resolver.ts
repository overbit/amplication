import * as graphql from "@nestjs/graphql";
import { MultiprogramlockoutResolverBase } from "./base/multiprogramlockout.resolver.base";
import { Multiprogramlockout } from "./base/Multiprogramlockout";
import { MultiprogramlockoutService } from "./multiprogramlockout.service";

@graphql.Resolver(() => Multiprogramlockout)
export class MultiprogramlockoutResolver extends MultiprogramlockoutResolverBase {
  constructor(protected readonly service: MultiprogramlockoutService) {
    super(service);
  }
}
