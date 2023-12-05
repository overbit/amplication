import * as graphql from "@nestjs/graphql";
import { CmuAffiliationResolverBase } from "./base/cmuAffiliation.resolver.base";
import { CmuAffiliation } from "./base/CmuAffiliation";
import { CmuAffiliationService } from "./cmuAffiliation.service";

@graphql.Resolver(() => CmuAffiliation)
export class CmuAffiliationResolver extends CmuAffiliationResolverBase {
  constructor(protected readonly service: CmuAffiliationService) {
    super(service);
  }
}
