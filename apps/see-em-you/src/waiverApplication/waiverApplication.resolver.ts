import * as graphql from "@nestjs/graphql";
import { WaiverApplicationResolverBase } from "./base/waiverApplication.resolver.base";
import { WaiverApplication } from "./base/WaiverApplication";
import { WaiverApplicationService } from "./waiverApplication.service";

@graphql.Resolver(() => WaiverApplication)
export class WaiverApplicationResolver extends WaiverApplicationResolverBase {
  constructor(protected readonly service: WaiverApplicationService) {
    super(service);
  }
}
