import * as graphql from "@nestjs/graphql";
import { ToeflItpPlusResolverBase } from "./base/toeflItpPlus.resolver.base";
import { ToeflItpPlus } from "./base/ToeflItpPlus";
import { ToeflItpPlusService } from "./toeflItpPlus.service";

@graphql.Resolver(() => ToeflItpPlus)
export class ToeflItpPlusResolver extends ToeflItpPlusResolverBase {
  constructor(protected readonly service: ToeflItpPlusService) {
    super(service);
  }
}
