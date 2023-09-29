import * as graphql from "@nestjs/graphql";
import { SlateLangCodeResolverBase } from "./base/slateLangCode.resolver.base";
import { SlateLangCode } from "./base/SlateLangCode";
import { SlateLangCodeService } from "./slateLangCode.service";

@graphql.Resolver(() => SlateLangCode)
export class SlateLangCodeResolver extends SlateLangCodeResolverBase {
  constructor(protected readonly service: SlateLangCodeService) {
    super(service);
  }
}
