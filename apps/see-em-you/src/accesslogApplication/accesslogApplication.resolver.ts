import * as graphql from "@nestjs/graphql";
import { AccesslogApplicationResolverBase } from "./base/accesslogApplication.resolver.base";
import { AccesslogApplication } from "./base/AccesslogApplication";
import { AccesslogApplicationService } from "./accesslogApplication.service";

@graphql.Resolver(() => AccesslogApplication)
export class AccesslogApplicationResolver extends AccesslogApplicationResolverBase {
  constructor(protected readonly service: AccesslogApplicationService) {
    super(service);
  }
}
