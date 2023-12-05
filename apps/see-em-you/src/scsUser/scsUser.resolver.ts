import * as graphql from "@nestjs/graphql";
import { ScsUserResolverBase } from "./base/scsUser.resolver.base";
import { ScsUser } from "./base/ScsUser";
import { ScsUserService } from "./scsUser.service";

@graphql.Resolver(() => ScsUser)
export class ScsUserResolver extends ScsUserResolverBase {
  constructor(protected readonly service: ScsUserService) {
    super(service);
  }
}
