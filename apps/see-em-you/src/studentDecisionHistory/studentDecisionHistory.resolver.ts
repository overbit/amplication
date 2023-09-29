import * as graphql from "@nestjs/graphql";
import { StudentDecisionHistoryResolverBase } from "./base/studentDecisionHistory.resolver.base";
import { StudentDecisionHistory } from "./base/StudentDecisionHistory";
import { StudentDecisionHistoryService } from "./studentDecisionHistory.service";

@graphql.Resolver(() => StudentDecisionHistory)
export class StudentDecisionHistoryResolver extends StudentDecisionHistoryResolverBase {
  constructor(protected readonly service: StudentDecisionHistoryService) {
    super(service);
  }
}
