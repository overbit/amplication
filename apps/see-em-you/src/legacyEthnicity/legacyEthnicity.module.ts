import { Module } from "@nestjs/common";
import { LegacyEthnicityModuleBase } from "./base/legacyEthnicity.module.base";
import { LegacyEthnicityService } from "./legacyEthnicity.service";
import { LegacyEthnicityController } from "./legacyEthnicity.controller";
import { LegacyEthnicityResolver } from "./legacyEthnicity.resolver";

@Module({
  imports: [LegacyEthnicityModuleBase],
  controllers: [LegacyEthnicityController],
  providers: [LegacyEthnicityService, LegacyEthnicityResolver],
  exports: [LegacyEthnicityService],
})
export class LegacyEthnicityModule {}
