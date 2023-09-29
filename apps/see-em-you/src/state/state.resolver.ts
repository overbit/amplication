import * as graphql from "@nestjs/graphql";
import { StateResolverBase } from "./base/state.resolver.base";
import { State } from "./base/State";
import { StateService } from "./state.service";

@graphql.Resolver(() => State)
export class StateResolver extends StateResolverBase {
  constructor(protected readonly service: StateService) {
    super(service);
  }
}
