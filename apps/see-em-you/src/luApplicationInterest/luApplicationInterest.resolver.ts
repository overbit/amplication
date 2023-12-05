import * as graphql from "@nestjs/graphql";
import { LuApplicationInterestResolverBase } from "./base/luApplicationInterest.resolver.base";
import { LuApplicationInterest } from "./base/LuApplicationInterest";
import { LuApplicationInterestService } from "./luApplicationInterest.service";

@graphql.Resolver(() => LuApplicationInterest)
export class LuApplicationInterestResolver extends LuApplicationInterestResolverBase {
  constructor(protected readonly service: LuApplicationInterestService) {
    super(service);
  }
}
