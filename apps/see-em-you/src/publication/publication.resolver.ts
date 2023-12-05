import * as graphql from "@nestjs/graphql";
import { PublicationResolverBase } from "./base/publication.resolver.base";
import { Publication } from "./base/Publication";
import { PublicationService } from "./publication.service";

@graphql.Resolver(() => Publication)
export class PublicationResolver extends PublicationResolverBase {
  constructor(protected readonly service: PublicationService) {
    super(service);
  }
}
