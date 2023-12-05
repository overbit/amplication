import * as graphql from "@nestjs/graphql";
import { Em2SupportingCourseworkResolverBase } from "./base/em2SupportingCoursework.resolver.base";
import { Em2SupportingCoursework } from "./base/Em2SupportingCoursework";
import { Em2SupportingCourseworkService } from "./em2SupportingCoursework.service";

@graphql.Resolver(() => Em2SupportingCoursework)
export class Em2SupportingCourseworkResolver extends Em2SupportingCourseworkResolverBase {
  constructor(protected readonly service: Em2SupportingCourseworkService) {
    super(service);
  }
}
