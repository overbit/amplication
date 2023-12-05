import * as graphql from "@nestjs/graphql";
import { LuApplicationAdvisorResolverBase } from "./base/luApplicationAdvisor.resolver.base";
import { LuApplicationAdvisor } from "./base/LuApplicationAdvisor";
import { LuApplicationAdvisorService } from "./luApplicationAdvisor.service";

@graphql.Resolver(() => LuApplicationAdvisor)
export class LuApplicationAdvisorResolver extends LuApplicationAdvisorResolverBase {
  constructor(protected readonly service: LuApplicationAdvisorService) {
    super(service);
  }
}
