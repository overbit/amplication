import { Module } from "@nestjs/common";
import { MhciSlateIeltModuleBase } from "./base/mhciSlateIelt.module.base";
import { MhciSlateIeltService } from "./mhciSlateIelt.service";
import { MhciSlateIeltController } from "./mhciSlateIelt.controller";
import { MhciSlateIeltResolver } from "./mhciSlateIelt.resolver";

@Module({
  imports: [MhciSlateIeltModuleBase],
  controllers: [MhciSlateIeltController],
  providers: [MhciSlateIeltService, MhciSlateIeltResolver],
  exports: [MhciSlateIeltService],
})
export class MhciSlateIeltModule {}
