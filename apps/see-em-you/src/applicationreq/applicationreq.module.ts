import { Module } from "@nestjs/common";
import { ApplicationreqModuleBase } from "./base/applicationreq.module.base";
import { ApplicationreqService } from "./applicationreq.service";
import { ApplicationreqController } from "./applicationreq.controller";
import { ApplicationreqResolver } from "./applicationreq.resolver";

@Module({
  imports: [ApplicationreqModuleBase],
  controllers: [ApplicationreqController],
  providers: [ApplicationreqService, ApplicationreqResolver],
  exports: [ApplicationreqService],
})
export class ApplicationreqModule {}
