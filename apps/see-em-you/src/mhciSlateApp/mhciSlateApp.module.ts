import { Module } from "@nestjs/common";
import { MhciSlateAppModuleBase } from "./base/mhciSlateApp.module.base";
import { MhciSlateAppService } from "./mhciSlateApp.service";
import { MhciSlateAppController } from "./mhciSlateApp.controller";
import { MhciSlateAppResolver } from "./mhciSlateApp.resolver";

@Module({
  imports: [MhciSlateAppModuleBase],
  controllers: [MhciSlateAppController],
  providers: [MhciSlateAppService, MhciSlateAppResolver],
  exports: [MhciSlateAppService],
})
export class MhciSlateAppModule {}
