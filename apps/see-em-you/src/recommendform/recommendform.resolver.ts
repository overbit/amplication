import * as graphql from "@nestjs/graphql";
import { RecommendformResolverBase } from "./base/recommendform.resolver.base";
import { Recommendform } from "./base/Recommendform";
import { RecommendformService } from "./recommendform.service";

@graphql.Resolver(() => Recommendform)
export class RecommendformResolver extends RecommendformResolverBase {
  constructor(protected readonly service: RecommendformService) {
    super(service);
  }
}
