import * as graphql from "@nestjs/graphql";
import { ReviewIniAlternativeProgramResolverBase } from "./base/reviewIniAlternativeProgram.resolver.base";
import { ReviewIniAlternativeProgram } from "./base/ReviewIniAlternativeProgram";
import { ReviewIniAlternativeProgramService } from "./reviewIniAlternativeProgram.service";

@graphql.Resolver(() => ReviewIniAlternativeProgram)
export class ReviewIniAlternativeProgramResolver extends ReviewIniAlternativeProgramResolverBase {
  constructor(protected readonly service: ReviewIniAlternativeProgramService) {
    super(service);
  }
}
