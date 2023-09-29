import * as graphql from "@nestjs/graphql";
import { MhciSlatePubResolverBase } from "./base/mhciSlatePub.resolver.base";
import { MhciSlatePub } from "./base/MhciSlatePub";
import { MhciSlatePubService } from "./mhciSlatePub.service";

@graphql.Resolver(() => MhciSlatePub)
export class MhciSlatePubResolver extends MhciSlatePubResolverBase {
  constructor(protected readonly service: MhciSlatePubService) {
    super(service);
  }
}
