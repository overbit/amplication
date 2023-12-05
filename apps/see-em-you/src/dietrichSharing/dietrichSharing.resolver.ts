import * as graphql from "@nestjs/graphql";
import { DietrichSharingResolverBase } from "./base/dietrichSharing.resolver.base";
import { DietrichSharing } from "./base/DietrichSharing";
import { DietrichSharingService } from "./dietrichSharing.service";

@graphql.Resolver(() => DietrichSharing)
export class DietrichSharingResolver extends DietrichSharingResolverBase {
  constructor(protected readonly service: DietrichSharingService) {
    super(service);
  }
}
