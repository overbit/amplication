import * as graphql from "@nestjs/graphql";
import { LuUsersUsertypesOrigResolverBase } from "./base/luUsersUsertypesOrig.resolver.base";
import { LuUsersUsertypesOrig } from "./base/LuUsersUsertypesOrig";
import { LuUsersUsertypesOrigService } from "./luUsersUsertypesOrig.service";

@graphql.Resolver(() => LuUsersUsertypesOrig)
export class LuUsersUsertypesOrigResolver extends LuUsersUsertypesOrigResolverBase {
  constructor(protected readonly service: LuUsersUsertypesOrigService) {
    super(service);
  }
}
