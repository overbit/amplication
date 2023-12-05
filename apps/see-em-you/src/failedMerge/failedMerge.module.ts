import { Module } from "@nestjs/common";
import { FailedMergeModuleBase } from "./base/failedMerge.module.base";
import { FailedMergeService } from "./failedMerge.service";
import { FailedMergeController } from "./failedMerge.controller";
import { FailedMergeResolver } from "./failedMerge.resolver";

@Module({
  imports: [FailedMergeModuleBase],
  controllers: [FailedMergeController],
  providers: [FailedMergeService, FailedMergeResolver],
  exports: [FailedMergeService],
})
export class FailedMergeModule {}
