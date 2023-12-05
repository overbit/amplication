import * as graphql from "@nestjs/graphql";
import { EtsGreResolverBase } from "./base/etsGre.resolver.base";
import { EtsGre } from "./base/EtsGre";
import { EtsGreService } from "./etsGre.service";

@graphql.Resolver(() => EtsGre)
export class EtsGreResolver extends EtsGreResolverBase {
  constructor(protected readonly service: EtsGreService) {
    super(service);
  }
}
