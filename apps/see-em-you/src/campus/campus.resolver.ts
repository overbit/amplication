import * as graphql from "@nestjs/graphql";
import { CampusResolverBase } from "./base/campus.resolver.base";
import { Campus } from "./base/Campus";
import { CampusService } from "./campus.service";

@graphql.Resolver(() => Campus)
export class CampusResolver extends CampusResolverBase {
  constructor(protected readonly service: CampusService) {
    super(service);
  }
}
