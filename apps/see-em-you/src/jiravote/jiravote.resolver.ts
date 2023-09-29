import * as graphql from "@nestjs/graphql";
import { JiravoteResolverBase } from "./base/jiravote.resolver.base";
import { Jiravote } from "./base/Jiravote";
import { JiravoteService } from "./jiravote.service";

@graphql.Resolver(() => Jiravote)
export class JiravoteResolver extends JiravoteResolverBase {
  constructor(protected readonly service: JiravoteService) {
    super(service);
  }
}
