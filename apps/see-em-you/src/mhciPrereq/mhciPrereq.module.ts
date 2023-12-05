import { Module } from "@nestjs/common";
import { MhciPrereqModuleBase } from "./base/mhciPrereq.module.base";
import { MhciPrereqService } from "./mhciPrereq.service";
import { MhciPrereqController } from "./mhciPrereq.controller";
import { MhciPrereqResolver } from "./mhciPrereq.resolver";

@Module({
  imports: [MhciPrereqModuleBase],
  controllers: [MhciPrereqController],
  providers: [MhciPrereqService, MhciPrereqResolver],
  exports: [MhciPrereqService],
})
export class MhciPrereqModule {}
