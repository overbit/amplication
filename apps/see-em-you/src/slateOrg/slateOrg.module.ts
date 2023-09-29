import { Module } from "@nestjs/common";
import { SlateOrgModuleBase } from "./base/slateOrg.module.base";
import { SlateOrgService } from "./slateOrg.service";
import { SlateOrgController } from "./slateOrg.controller";
import { SlateOrgResolver } from "./slateOrg.resolver";

@Module({
  imports: [SlateOrgModuleBase],
  controllers: [SlateOrgController],
  providers: [SlateOrgService, SlateOrgResolver],
  exports: [SlateOrgService],
})
export class SlateOrgModule {}
