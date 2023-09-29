import * as graphql from "@nestjs/graphql";
import { SlateEmployResolverBase } from "./base/slateEmploy.resolver.base";
import { SlateEmploy } from "./base/SlateEmploy";
import { SlateEmployService } from "./slateEmploy.service";

@graphql.Resolver(() => SlateEmploy)
export class SlateEmployResolver extends SlateEmployResolverBase {
  constructor(protected readonly service: SlateEmployService) {
    super(service);
  }
}
