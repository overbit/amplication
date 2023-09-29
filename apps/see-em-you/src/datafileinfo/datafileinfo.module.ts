import { Module } from "@nestjs/common";
import { DatafileinfoModuleBase } from "./base/datafileinfo.module.base";
import { DatafileinfoService } from "./datafileinfo.service";
import { DatafileinfoController } from "./datafileinfo.controller";
import { DatafileinfoResolver } from "./datafileinfo.resolver";

@Module({
  imports: [DatafileinfoModuleBase],
  controllers: [DatafileinfoController],
  providers: [DatafileinfoService, DatafileinfoResolver],
  exports: [DatafileinfoService],
})
export class DatafileinfoModule {}
