import * as graphql from "@nestjs/graphql";
import { EtsConfigResolverBase } from "./base/etsConfig.resolver.base";
import { EtsConfig } from "./base/EtsConfig";
import { EtsConfigService } from "./etsConfig.service";

@graphql.Resolver(() => EtsConfig)
export class EtsConfigResolver extends EtsConfigResolverBase {
  constructor(protected readonly service: EtsConfigService) {
    super(service);
  }
}
