import * as graphql from "@nestjs/graphql";
import { SlateRecommend1ResolverBase } from "./base/slateRecommend1.resolver.base";
import { SlateRecommend1 } from "./base/SlateRecommend1";
import { SlateRecommend1Service } from "./slateRecommend1.service";

@graphql.Resolver(() => SlateRecommend1)
export class SlateRecommend1Resolver extends SlateRecommend1ResolverBase {
  constructor(protected readonly service: SlateRecommend1Service) {
    super(service);
  }
}
