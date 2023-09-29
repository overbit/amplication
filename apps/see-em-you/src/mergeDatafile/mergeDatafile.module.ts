import { Module } from "@nestjs/common";
import { MergeDatafileModuleBase } from "./base/mergeDatafile.module.base";
import { MergeDatafileService } from "./mergeDatafile.service";
import { MergeDatafileController } from "./mergeDatafile.controller";
import { MergeDatafileResolver } from "./mergeDatafile.resolver";

@Module({
  imports: [MergeDatafileModuleBase],
  controllers: [MergeDatafileController],
  providers: [MergeDatafileService, MergeDatafileResolver],
  exports: [MergeDatafileService],
})
export class MergeDatafileModule {}
