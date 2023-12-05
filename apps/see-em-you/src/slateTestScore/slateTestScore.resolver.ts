import * as graphql from "@nestjs/graphql";
import { SlateTestScoreResolverBase } from "./base/slateTestScore.resolver.base";
import { SlateTestScore } from "./base/SlateTestScore";
import { SlateTestScoreService } from "./slateTestScore.service";

@graphql.Resolver(() => SlateTestScore)
export class SlateTestScoreResolver extends SlateTestScoreResolverBase {
  constructor(protected readonly service: SlateTestScoreService) {
    super(service);
  }
}
