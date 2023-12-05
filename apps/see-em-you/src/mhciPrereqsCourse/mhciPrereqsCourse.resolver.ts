import * as graphql from "@nestjs/graphql";
import { MhciPrereqsCourseResolverBase } from "./base/mhciPrereqsCourse.resolver.base";
import { MhciPrereqsCourse } from "./base/MhciPrereqsCourse";
import { MhciPrereqsCourseService } from "./mhciPrereqsCourse.service";

@graphql.Resolver(() => MhciPrereqsCourse)
export class MhciPrereqsCourseResolver extends MhciPrereqsCourseResolverBase {
  constructor(protected readonly service: MhciPrereqsCourseService) {
    super(service);
  }
}
