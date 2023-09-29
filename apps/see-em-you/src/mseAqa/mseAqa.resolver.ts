import * as graphql from "@nestjs/graphql";
import { MseAqaResolverBase } from "./base/mseAqa.resolver.base";
import { MseAqa } from "./base/MseAqa";
import { MseAqaService } from "./mseAqa.service";

@graphql.Resolver(() => MseAqa)
export class MseAqaResolver extends MseAqaResolverBase {
  constructor(protected readonly service: MseAqaService) {
    super(service);
  }
}
