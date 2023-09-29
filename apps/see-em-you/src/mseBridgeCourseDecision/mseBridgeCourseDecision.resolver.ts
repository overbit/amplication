import * as graphql from "@nestjs/graphql";
import { MseBridgeCourseDecisionResolverBase } from "./base/mseBridgeCourseDecision.resolver.base";
import { MseBridgeCourseDecision } from "./base/MseBridgeCourseDecision";
import { MseBridgeCourseDecisionService } from "./mseBridgeCourseDecision.service";

@graphql.Resolver(() => MseBridgeCourseDecision)
export class MseBridgeCourseDecisionResolver extends MseBridgeCourseDecisionResolverBase {
  constructor(protected readonly service: MseBridgeCourseDecisionService) {
    super(service);
  }
}
