import * as graphql from "@nestjs/graphql";
import { ApplicationContentResolverBase } from "./base/applicationContent.resolver.base";
import { ApplicationContent } from "./base/ApplicationContent";
import { ApplicationContentService } from "./applicationContent.service";

@graphql.Resolver(() => ApplicationContent)
export class ApplicationContentResolver extends ApplicationContentResolverBase {
  constructor(protected readonly service: ApplicationContentService) {
    super(service);
  }
}
