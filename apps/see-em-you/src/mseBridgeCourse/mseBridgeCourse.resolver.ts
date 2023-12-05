import * as graphql from "@nestjs/graphql";
import { MseBridgeCourseResolverBase } from "./base/mseBridgeCourse.resolver.base";
import { MseBridgeCourse } from "./base/MseBridgeCourse";
import { MseBridgeCourseService } from "./mseBridgeCourse.service";

@graphql.Resolver(() => MseBridgeCourse)
export class MseBridgeCourseResolver extends MseBridgeCourseResolverBase {
  constructor(protected readonly service: MseBridgeCourseService) {
    super(service);
  }
}
