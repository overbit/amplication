import * as graphql from "@nestjs/graphql";
import { SemPreviousCourseResolverBase } from "./base/semPreviousCourse.resolver.base";
import { SemPreviousCourse } from "./base/SemPreviousCourse";
import { SemPreviousCourseService } from "./semPreviousCourse.service";

@graphql.Resolver(() => SemPreviousCourse)
export class SemPreviousCourseResolver extends SemPreviousCourseResolverBase {
  constructor(protected readonly service: SemPreviousCourseService) {
    super(service);
  }
}
