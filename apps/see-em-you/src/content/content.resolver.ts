import * as graphql from "@nestjs/graphql";
import { ContentResolverBase } from "./base/content.resolver.base";
import { Content } from "./base/Content";
import { ContentService } from "./content.service";

@graphql.Resolver(() => Content)
export class ContentResolver extends ContentResolverBase {
  constructor(protected readonly service: ContentService) {
    super(service);
  }
}
