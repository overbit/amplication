import { Module } from "@nestjs/common";
import { EthnicityModuleBase } from "./base/ethnicity.module.base";
import { EthnicityService } from "./ethnicity.service";
import { EthnicityController } from "./ethnicity.controller";
import { EthnicityResolver } from "./ethnicity.resolver";

@Module({
  imports: [EthnicityModuleBase],
  controllers: [EthnicityController],
  providers: [EthnicityService, EthnicityResolver],
  exports: [EthnicityService],
})
export class EthnicityModule {}
