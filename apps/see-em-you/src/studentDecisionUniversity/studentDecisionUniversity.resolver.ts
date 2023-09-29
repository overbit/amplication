import * as graphql from "@nestjs/graphql";
import { StudentDecisionUniversityResolverBase } from "./base/studentDecisionUniversity.resolver.base";
import { StudentDecisionUniversity } from "./base/StudentDecisionUniversity";
import { StudentDecisionUniversityService } from "./studentDecisionUniversity.service";

@graphql.Resolver(() => StudentDecisionUniversity)
export class StudentDecisionUniversityResolver extends StudentDecisionUniversityResolverBase {
  constructor(protected readonly service: StudentDecisionUniversityService) {
    super(service);
  }
}
