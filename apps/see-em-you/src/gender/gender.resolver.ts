import * as graphql from "@nestjs/graphql";
import { GenderResolverBase } from "./base/gender.resolver.base";
import { Gender } from "./base/Gender";
import { GenderService } from "./gender.service";

@graphql.Resolver(() => Gender)
export class GenderResolver extends GenderResolverBase {
  constructor(protected readonly service: GenderService) {
    super(service);
  }
}
