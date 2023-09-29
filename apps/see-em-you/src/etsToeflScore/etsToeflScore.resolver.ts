import * as graphql from "@nestjs/graphql";
import { EtsToeflScoreResolverBase } from "./base/etsToeflScore.resolver.base";
import { EtsToeflScore } from "./base/EtsToeflScore";
import { EtsToeflScoreService } from "./etsToeflScore.service";

@graphql.Resolver(() => EtsToeflScore)
export class EtsToeflScoreResolver extends EtsToeflScoreResolverBase {
  constructor(protected readonly service: EtsToeflScoreService) {
    super(service);
  }
}
