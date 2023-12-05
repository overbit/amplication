import * as graphql from "@nestjs/graphql";
import { UsersinstResolverBase } from "./base/usersinst.resolver.base";
import { Usersinst } from "./base/Usersinst";
import { UsersinstService } from "./usersinst.service";

@graphql.Resolver(() => Usersinst)
export class UsersinstResolver extends UsersinstResolverBase {
  constructor(protected readonly service: UsersinstService) {
    super(service);
  }
}
