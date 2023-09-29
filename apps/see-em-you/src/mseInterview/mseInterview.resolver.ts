import * as graphql from "@nestjs/graphql";
import { MseInterviewResolverBase } from "./base/mseInterview.resolver.base";
import { MseInterview } from "./base/MseInterview";
import { MseInterviewService } from "./mseInterview.service";

@graphql.Resolver(() => MseInterview)
export class MseInterviewResolver extends MseInterviewResolverBase {
  constructor(protected readonly service: MseInterviewService) {
    super(service);
  }
}
