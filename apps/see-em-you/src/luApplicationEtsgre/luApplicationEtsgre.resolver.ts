import * as graphql from "@nestjs/graphql";
import { LuApplicationEtsgreResolverBase } from "./base/luApplicationEtsgre.resolver.base";
import { LuApplicationEtsgre } from "./base/LuApplicationEtsgre";
import { LuApplicationEtsgreService } from "./luApplicationEtsgre.service";

@graphql.Resolver(() => LuApplicationEtsgre)
export class LuApplicationEtsgreResolver extends LuApplicationEtsgreResolverBase {
  constructor(protected readonly service: LuApplicationEtsgreService) {
    super(service);
  }
}
