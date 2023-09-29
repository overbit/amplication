import { Module } from "@nestjs/common";
import { WaiverApplicationModuleBase } from "./base/waiverApplication.module.base";
import { WaiverApplicationService } from "./waiverApplication.service";
import { WaiverApplicationController } from "./waiverApplication.controller";
import { WaiverApplicationResolver } from "./waiverApplication.resolver";

@Module({
  imports: [WaiverApplicationModuleBase],
  controllers: [WaiverApplicationController],
  providers: [WaiverApplicationService, WaiverApplicationResolver],
  exports: [WaiverApplicationService],
})
export class WaiverApplicationModule {}
