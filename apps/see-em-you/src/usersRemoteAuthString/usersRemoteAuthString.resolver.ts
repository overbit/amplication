import * as graphql from "@nestjs/graphql";
import { UsersRemoteAuthStringResolverBase } from "./base/usersRemoteAuthString.resolver.base";
import { UsersRemoteAuthString } from "./base/UsersRemoteAuthString";
import { UsersRemoteAuthStringService } from "./usersRemoteAuthString.service";

@graphql.Resolver(() => UsersRemoteAuthString)
export class UsersRemoteAuthStringResolver extends UsersRemoteAuthStringResolverBase {
  constructor(protected readonly service: UsersRemoteAuthStringService) {
    super(service);
  }
}
