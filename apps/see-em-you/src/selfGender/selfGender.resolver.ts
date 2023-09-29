import * as graphql from "@nestjs/graphql";
import { SelfGenderResolverBase } from "./base/selfGender.resolver.base";
import { SelfGender } from "./base/SelfGender";
import { SelfGenderService } from "./selfGender.service";

@graphql.Resolver(() => SelfGender)
export class SelfGenderResolver extends SelfGenderResolverBase {
  constructor(protected readonly service: SelfGenderService) {
    super(service);
  }
}
