import * as graphql from "@nestjs/graphql";
import { UsersOrigResolverBase } from "./base/usersOrig.resolver.base";
import { UsersOrig } from "./base/UsersOrig";
import { UsersOrigService } from "./usersOrig.service";

@graphql.Resolver(() => UsersOrig)
export class UsersOrigResolver extends UsersOrigResolverBase {
  constructor(protected readonly service: UsersOrigService) {
    super(service);
  }
}
