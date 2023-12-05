import * as graphql from "@nestjs/graphql";
import { MhciSlateGreResolverBase } from "./base/mhciSlateGre.resolver.base";
import { MhciSlateGre } from "./base/MhciSlateGre";
import { MhciSlateGreService } from "./mhciSlateGre.service";

@graphql.Resolver(() => MhciSlateGre)
export class MhciSlateGreResolver extends MhciSlateGreResolverBase {
  constructor(protected readonly service: MhciSlateGreService) {
    super(service);
  }
}
