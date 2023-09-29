import * as graphql from "@nestjs/graphql";
import { ToeflResolverBase } from "./base/toefl.resolver.base";
import { Toefl } from "./base/Toefl";
import { ToeflService } from "./toefl.service";

@graphql.Resolver(() => Toefl)
export class ToeflResolver extends ToeflResolverBase {
  constructor(protected readonly service: ToeflService) {
    super(service);
  }
}
