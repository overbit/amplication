import { Module } from "@nestjs/common";
import { MergeApplicationModuleBase } from "./base/mergeApplication.module.base";
import { MergeApplicationService } from "./mergeApplication.service";
import { MergeApplicationController } from "./mergeApplication.controller";
import { MergeApplicationResolver } from "./mergeApplication.resolver";

@Module({
  imports: [MergeApplicationModuleBase],
  controllers: [MergeApplicationController],
  providers: [MergeApplicationService, MergeApplicationResolver],
  exports: [MergeApplicationService],
})
export class MergeApplicationModule {}
