import * as graphql from "@nestjs/graphql";
import { SlateEmail2AwUserResolverBase } from "./base/slateEmail2AwUser.resolver.base";
import { SlateEmail2AwUser } from "./base/SlateEmail2AwUser";
import { SlateEmail2AwUserService } from "./slateEmail2AwUser.service";

@graphql.Resolver(() => SlateEmail2AwUser)
export class SlateEmail2AwUserResolver extends SlateEmail2AwUserResolverBase {
  constructor(protected readonly service: SlateEmail2AwUserService) {
    super(service);
  }
}
