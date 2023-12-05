import * as graphql from "@nestjs/graphql";
import { UsersInfoResolverBase } from "./base/usersInfo.resolver.base";
import { UsersInfo } from "./base/UsersInfo";
import { UsersInfoService } from "./usersInfo.service";

@graphql.Resolver(() => UsersInfo)
export class UsersInfoResolver extends UsersInfoResolverBase {
  constructor(protected readonly service: UsersInfoService) {
    super(service);
  }
}
