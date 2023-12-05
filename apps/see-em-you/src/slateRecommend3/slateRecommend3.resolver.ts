import * as graphql from "@nestjs/graphql";
import { SlateRecommend3ResolverBase } from "./base/slateRecommend3.resolver.base";
import { SlateRecommend3 } from "./base/SlateRecommend3";
import { SlateRecommend3Service } from "./slateRecommend3.service";

@graphql.Resolver(() => SlateRecommend3)
export class SlateRecommend3Resolver extends SlateRecommend3ResolverBase {
  constructor(protected readonly service: SlateRecommend3Service) {
    super(service);
  }
}
