import * as graphql from "@nestjs/graphql";
import { MitsSlateEmployResolverBase } from "./base/mitsSlateEmploy.resolver.base";
import { MitsSlateEmploy } from "./base/MitsSlateEmploy";
import { MitsSlateEmployService } from "./mitsSlateEmploy.service";

@graphql.Resolver(() => MitsSlateEmploy)
export class MitsSlateEmployResolver extends MitsSlateEmployResolverBase {
  constructor(protected readonly service: MitsSlateEmployService) {
    super(service);
  }
}
