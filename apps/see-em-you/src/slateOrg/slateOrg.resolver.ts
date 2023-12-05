import * as graphql from "@nestjs/graphql";
import { SlateOrgResolverBase } from "./base/slateOrg.resolver.base";
import { SlateOrg } from "./base/SlateOrg";
import { SlateOrgService } from "./slateOrg.service";

@graphql.Resolver(() => SlateOrg)
export class SlateOrgResolver extends SlateOrgResolverBase {
  constructor(protected readonly service: SlateOrgService) {
    super(service);
  }
}
