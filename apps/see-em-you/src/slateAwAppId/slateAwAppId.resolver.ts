import * as graphql from "@nestjs/graphql";
import { SlateAwAppIdResolverBase } from "./base/slateAwAppId.resolver.base";
import { SlateAwAppId } from "./base/SlateAwAppId";
import { SlateAwAppIdService } from "./slateAwAppId.service";

@graphql.Resolver(() => SlateAwAppId)
export class SlateAwAppIdResolver extends SlateAwAppIdResolverBase {
  constructor(protected readonly service: SlateAwAppIdService) {
    super(service);
  }
}
