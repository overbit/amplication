import { Module } from "@nestjs/common";
import { CmuAffiliationModuleBase } from "./base/cmuAffiliation.module.base";
import { CmuAffiliationService } from "./cmuAffiliation.service";
import { CmuAffiliationController } from "./cmuAffiliation.controller";
import { CmuAffiliationResolver } from "./cmuAffiliation.resolver";

@Module({
  imports: [CmuAffiliationModuleBase],
  controllers: [CmuAffiliationController],
  providers: [CmuAffiliationService, CmuAffiliationResolver],
  exports: [CmuAffiliationService],
})
export class CmuAffiliationModule {}
