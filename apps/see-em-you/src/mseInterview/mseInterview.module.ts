import { Module } from "@nestjs/common";
import { MseInterviewModuleBase } from "./base/mseInterview.module.base";
import { MseInterviewService } from "./mseInterview.service";
import { MseInterviewController } from "./mseInterview.controller";
import { MseInterviewResolver } from "./mseInterview.resolver";

@Module({
  imports: [MseInterviewModuleBase],
  controllers: [MseInterviewController],
  providers: [MseInterviewService, MseInterviewResolver],
  exports: [MseInterviewService],
})
export class MseInterviewModule {}
