import { Module } from "@nestjs/common";
import { RejectionWaiverModuleBase } from "./base/rejectionWaiver.module.base";
import { RejectionWaiverService } from "./rejectionWaiver.service";
import { RejectionWaiverController } from "./rejectionWaiver.controller";
import { RejectionWaiverResolver } from "./rejectionWaiver.resolver";

@Module({
  imports: [RejectionWaiverModuleBase],
  controllers: [RejectionWaiverController],
  providers: [RejectionWaiverService, RejectionWaiverResolver],
  exports: [RejectionWaiverService],
})
export class RejectionWaiverModule {}
