import * as graphql from "@nestjs/graphql";
import { SlateToeflResolverBase } from "./base/slateToefl.resolver.base";
import { SlateToefl } from "./base/SlateToefl";
import { SlateToeflService } from "./slateToefl.service";

@graphql.Resolver(() => SlateToefl)
export class SlateToeflResolver extends SlateToeflResolverBase {
  constructor(protected readonly service: SlateToeflService) {
    super(service);
  }
}
