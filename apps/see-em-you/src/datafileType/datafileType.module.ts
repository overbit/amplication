import { Module } from "@nestjs/common";
import { DatafileTypeModuleBase } from "./base/datafileType.module.base";
import { DatafileTypeService } from "./datafileType.service";
import { DatafileTypeController } from "./datafileType.controller";
import { DatafileTypeResolver } from "./datafileType.resolver";

@Module({
  imports: [DatafileTypeModuleBase],
  controllers: [DatafileTypeController],
  providers: [DatafileTypeService, DatafileTypeResolver],
  exports: [DatafileTypeService],
})
export class DatafileTypeModule {}
