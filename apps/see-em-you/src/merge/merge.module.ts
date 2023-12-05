import { Module } from "@nestjs/common";
import { MergeModuleBase } from "./base/merge.module.base";
import { MergeService } from "./merge.service";
import { MergeController } from "./merge.controller";
import { MergeResolver } from "./merge.resolver";

@Module({
  imports: [MergeModuleBase],
  controllers: [MergeController],
  providers: [MergeService, MergeResolver],
  exports: [MergeService],
})
export class MergeModule {}
