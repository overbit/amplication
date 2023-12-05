import { Module } from "@nestjs/common";
import { MhciPrereqsStatusModuleBase } from "./base/mhciPrereqsStatus.module.base";
import { MhciPrereqsStatusService } from "./mhciPrereqsStatus.service";
import { MhciPrereqsStatusController } from "./mhciPrereqsStatus.controller";
import { MhciPrereqsStatusResolver } from "./mhciPrereqsStatus.resolver";

@Module({
  imports: [MhciPrereqsStatusModuleBase],
  controllers: [MhciPrereqsStatusController],
  providers: [MhciPrereqsStatusService, MhciPrereqsStatusResolver],
  exports: [MhciPrereqsStatusService],
})
export class MhciPrereqsStatusModule {}
