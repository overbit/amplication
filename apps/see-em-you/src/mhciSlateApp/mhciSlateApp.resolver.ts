import * as graphql from "@nestjs/graphql";
import { MhciSlateAppResolverBase } from "./base/mhciSlateApp.resolver.base";
import { MhciSlateApp } from "./base/MhciSlateApp";
import { MhciSlateAppService } from "./mhciSlateApp.service";

@graphql.Resolver(() => MhciSlateApp)
export class MhciSlateAppResolver extends MhciSlateAppResolverBase {
  constructor(protected readonly service: MhciSlateAppService) {
    super(service);
  }
}
