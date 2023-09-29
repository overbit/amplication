import * as graphql from "@nestjs/graphql";
import { AssistantshipResolverBase } from "./base/assistantship.resolver.base";
import { Assistantship } from "./base/Assistantship";
import { AssistantshipService } from "./assistantship.service";

@graphql.Resolver(() => Assistantship)
export class AssistantshipResolver extends AssistantshipResolverBase {
  constructor(protected readonly service: AssistantshipService) {
    super(service);
  }
}
