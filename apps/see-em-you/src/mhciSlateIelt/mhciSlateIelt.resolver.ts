import * as graphql from "@nestjs/graphql";
import { MhciSlateIeltResolverBase } from "./base/mhciSlateIelt.resolver.base";
import { MhciSlateIelt } from "./base/MhciSlateIelt";
import { MhciSlateIeltService } from "./mhciSlateIelt.service";

@graphql.Resolver(() => MhciSlateIelt)
export class MhciSlateIeltResolver extends MhciSlateIeltResolverBase {
  constructor(protected readonly service: MhciSlateIeltService) {
    super(service);
  }
}
