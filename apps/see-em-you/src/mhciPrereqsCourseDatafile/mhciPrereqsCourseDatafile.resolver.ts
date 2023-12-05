import * as graphql from "@nestjs/graphql";
import { MhciPrereqsCourseDatafileResolverBase } from "./base/mhciPrereqsCourseDatafile.resolver.base";
import { MhciPrereqsCourseDatafile } from "./base/MhciPrereqsCourseDatafile";
import { MhciPrereqsCourseDatafileService } from "./mhciPrereqsCourseDatafile.service";

@graphql.Resolver(() => MhciPrereqsCourseDatafile)
export class MhciPrereqsCourseDatafileResolver extends MhciPrereqsCourseDatafileResolverBase {
  constructor(protected readonly service: MhciPrereqsCourseDatafileService) {
    super(service);
  }
}
