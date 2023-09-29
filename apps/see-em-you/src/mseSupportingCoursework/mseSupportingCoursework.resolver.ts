import * as graphql from "@nestjs/graphql";
import { MseSupportingCourseworkResolverBase } from "./base/mseSupportingCoursework.resolver.base";
import { MseSupportingCoursework } from "./base/MseSupportingCoursework";
import { MseSupportingCourseworkService } from "./mseSupportingCoursework.service";

@graphql.Resolver(() => MseSupportingCoursework)
export class MseSupportingCourseworkResolver extends MseSupportingCourseworkResolverBase {
  constructor(protected readonly service: MseSupportingCourseworkService) {
    super(service);
  }
}
