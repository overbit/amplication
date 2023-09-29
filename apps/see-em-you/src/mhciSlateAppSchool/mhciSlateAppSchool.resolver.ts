import * as graphql from "@nestjs/graphql";
import { MhciSlateAppSchoolResolverBase } from "./base/mhciSlateAppSchool.resolver.base";
import { MhciSlateAppSchool } from "./base/MhciSlateAppSchool";
import { MhciSlateAppSchoolService } from "./mhciSlateAppSchool.service";

@graphql.Resolver(() => MhciSlateAppSchool)
export class MhciSlateAppSchoolResolver extends MhciSlateAppSchoolResolverBase {
  constructor(protected readonly service: MhciSlateAppSchoolService) {
    super(service);
  }
}
