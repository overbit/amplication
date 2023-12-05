import { Module } from "@nestjs/common";
import { GrescoreMscsWaiverModuleBase } from "./base/grescoreMscsWaiver.module.base";
import { GrescoreMscsWaiverService } from "./grescoreMscsWaiver.service";
import { GrescoreMscsWaiverController } from "./grescoreMscsWaiver.controller";
import { GrescoreMscsWaiverResolver } from "./grescoreMscsWaiver.resolver";

@Module({
  imports: [GrescoreMscsWaiverModuleBase],
  controllers: [GrescoreMscsWaiverController],
  providers: [GrescoreMscsWaiverService, GrescoreMscsWaiverResolver],
  exports: [GrescoreMscsWaiverService],
})
export class GrescoreMscsWaiverModule {}
