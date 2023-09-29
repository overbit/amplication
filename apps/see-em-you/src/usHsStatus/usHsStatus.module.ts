import { Module } from "@nestjs/common";
import { UsHsStatusModuleBase } from "./base/usHsStatus.module.base";
import { UsHsStatusService } from "./usHsStatus.service";
import { UsHsStatusController } from "./usHsStatus.controller";
import { UsHsStatusResolver } from "./usHsStatus.resolver";

@Module({
  imports: [UsHsStatusModuleBase],
  controllers: [UsHsStatusController],
  providers: [UsHsStatusService, UsHsStatusResolver],
  exports: [UsHsStatusService],
})
export class UsHsStatusModule {}
