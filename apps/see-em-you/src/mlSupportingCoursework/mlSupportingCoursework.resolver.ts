import * as graphql from "@nestjs/graphql";
import { MlSupportingCourseworkResolverBase } from "./base/mlSupportingCoursework.resolver.base";
import { MlSupportingCoursework } from "./base/MlSupportingCoursework";
import { MlSupportingCourseworkService } from "./mlSupportingCoursework.service";

@graphql.Resolver(() => MlSupportingCoursework)
export class MlSupportingCourseworkResolver extends MlSupportingCourseworkResolverBase {
  constructor(protected readonly service: MlSupportingCourseworkService) {
    super(service);
  }
}
