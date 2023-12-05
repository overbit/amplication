import * as graphql from "@nestjs/graphql";
import { ApplicationDecisionSchoolResolverBase } from "./base/applicationDecisionSchool.resolver.base";
import { ApplicationDecisionSchool } from "./base/ApplicationDecisionSchool";
import { ApplicationDecisionSchoolService } from "./applicationDecisionSchool.service";

@graphql.Resolver(() => ApplicationDecisionSchool)
export class ApplicationDecisionSchoolResolver extends ApplicationDecisionSchoolResolverBase {
  constructor(protected readonly service: ApplicationDecisionSchoolService) {
    super(service);
  }
}
