import * as graphql from "@nestjs/graphql";
import { WaiverOrgResolverBase } from "./base/waiverOrg.resolver.base";
import { WaiverOrg } from "./base/WaiverOrg";
import { WaiverOrgService } from "./waiverOrg.service";

@graphql.Resolver(() => WaiverOrg)
export class WaiverOrgResolver extends WaiverOrgResolverBase {
  constructor(protected readonly service: WaiverOrgService) {
    super(service);
  }
}
