import { Module } from "@nestjs/common";
import { RecyclableSelectionModuleBase } from "./base/recyclableSelection.module.base";
import { RecyclableSelectionService } from "./recyclableSelection.service";
import { RecyclableSelectionController } from "./recyclableSelection.controller";
import { RecyclableSelectionResolver } from "./recyclableSelection.resolver";

@Module({
  imports: [RecyclableSelectionModuleBase],
  controllers: [RecyclableSelectionController],
  providers: [RecyclableSelectionService, RecyclableSelectionResolver],
  exports: [RecyclableSelectionService],
})
export class RecyclableSelectionModule {}
