import * as graphql from "@nestjs/graphql";
import { ContenttypeResolverBase } from "./base/contenttype.resolver.base";
import { Contenttype } from "./base/Contenttype";
import { ContenttypeService } from "./contenttype.service";

@graphql.Resolver(() => Contenttype)
export class ContenttypeResolver extends ContenttypeResolverBase {
  constructor(protected readonly service: ContenttypeService) {
    super(service);
  }
}
