import * as graphql from "@nestjs/graphql";
import { MlAreaResolverBase } from "./base/mlArea.resolver.base";
import { MlArea } from "./base/MlArea";
import { MlAreaService } from "./mlArea.service";

@graphql.Resolver(() => MlArea)
export class MlAreaResolver extends MlAreaResolverBase {
  constructor(protected readonly service: MlAreaService) {
    super(service);
  }
}
