import * as graphql from "@nestjs/graphql";
import { StudentDecisionResolverBase } from "./base/studentDecision.resolver.base";
import { StudentDecision } from "./base/StudentDecision";
import { StudentDecisionService } from "./studentDecision.service";

@graphql.Resolver(() => StudentDecision)
export class StudentDecisionResolver extends StudentDecisionResolverBase {
  constructor(protected readonly service: StudentDecisionService) {
    super(service);
  }
}
