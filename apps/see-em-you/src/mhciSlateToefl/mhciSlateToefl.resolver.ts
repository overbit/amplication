import * as graphql from "@nestjs/graphql";
import { MhciSlateToeflResolverBase } from "./base/mhciSlateToefl.resolver.base";
import { MhciSlateToefl } from "./base/MhciSlateToefl";
import { MhciSlateToeflService } from "./mhciSlateToefl.service";

@graphql.Resolver(() => MhciSlateToefl)
export class MhciSlateToeflResolver extends MhciSlateToeflResolverBase {
  constructor(protected readonly service: MhciSlateToeflService) {
    super(service);
  }
}
