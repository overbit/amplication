import * as graphql from "@nestjs/graphql";
import { RequestsAccessResolverBase } from "./base/requestsAccess.resolver.base";
import { RequestsAccess } from "./base/RequestsAccess";
import { RequestsAccessService } from "./requestsAccess.service";

@graphql.Resolver(() => RequestsAccess)
export class RequestsAccessResolver extends RequestsAccessResolverBase {
  constructor(protected readonly service: RequestsAccessService) {
    super(service);
  }
}
