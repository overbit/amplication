import { Module } from "@nestjs/common";
import { WaiverOrgModuleBase } from "./base/waiverOrg.module.base";
import { WaiverOrgService } from "./waiverOrg.service";
import { WaiverOrgController } from "./waiverOrg.controller";
import { WaiverOrgResolver } from "./waiverOrg.resolver";

@Module({
  imports: [WaiverOrgModuleBase],
  controllers: [WaiverOrgController],
  providers: [WaiverOrgService, WaiverOrgResolver],
  exports: [WaiverOrgService],
})
export class WaiverOrgModule {}
