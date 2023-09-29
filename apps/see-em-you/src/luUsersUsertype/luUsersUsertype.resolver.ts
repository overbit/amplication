import * as graphql from "@nestjs/graphql";
import { LuUsersUsertypeResolverBase } from "./base/luUsersUsertype.resolver.base";
import { LuUsersUsertype } from "./base/LuUsersUsertype";
import { LuUsersUsertypeService } from "./luUsersUsertype.service";

@graphql.Resolver(() => LuUsersUsertype)
export class LuUsersUsertypeResolver extends LuUsersUsertypeResolverBase {
  constructor(protected readonly service: LuUsersUsertypeService) {
    super(service);
  }
}
