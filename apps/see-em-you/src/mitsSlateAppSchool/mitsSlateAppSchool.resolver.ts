import * as graphql from "@nestjs/graphql";
import { MitsSlateAppSchoolResolverBase } from "./base/mitsSlateAppSchool.resolver.base";
import { MitsSlateAppSchool } from "./base/MitsSlateAppSchool";
import { MitsSlateAppSchoolService } from "./mitsSlateAppSchool.service";

@graphql.Resolver(() => MitsSlateAppSchool)
export class MitsSlateAppSchoolResolver extends MitsSlateAppSchoolResolverBase {
  constructor(protected readonly service: MitsSlateAppSchoolService) {
    super(service);
  }
}
