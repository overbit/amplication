import * as graphql from "@nestjs/graphql";
import { ContentBakResolverBase } from "./base/contentBak.resolver.base";
import { ContentBak } from "./base/ContentBak";
import { ContentBakService } from "./contentBak.service";

@graphql.Resolver(() => ContentBak)
export class ContentBakResolver extends ContentBakResolverBase {
  constructor(protected readonly service: ContentBakService) {
    super(service);
  }
}
