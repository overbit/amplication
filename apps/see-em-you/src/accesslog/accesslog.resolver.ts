import * as graphql from "@nestjs/graphql";
import { AccesslogResolverBase } from "./base/accesslog.resolver.base";
import { Accesslog } from "./base/Accesslog";
import { AccesslogService } from "./accesslog.service";

@graphql.Resolver(() => Accesslog)
export class AccesslogResolver extends AccesslogResolverBase {
  constructor(protected readonly service: AccesslogService) {
    super(service);
  }
}
