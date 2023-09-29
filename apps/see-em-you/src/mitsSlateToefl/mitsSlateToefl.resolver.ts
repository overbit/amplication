import * as graphql from "@nestjs/graphql";
import { MitsSlateToeflResolverBase } from "./base/mitsSlateToefl.resolver.base";
import { MitsSlateToefl } from "./base/MitsSlateToefl";
import { MitsSlateToeflService } from "./mitsSlateToefl.service";

@graphql.Resolver(() => MitsSlateToefl)
export class MitsSlateToeflResolver extends MitsSlateToeflResolverBase {
  constructor(protected readonly service: MitsSlateToeflService) {
    super(service);
  }
}
