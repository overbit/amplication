import { Module } from "@nestjs/common";
import { DuolingoDataCopyModuleBase } from "./base/duolingoDataCopy.module.base";
import { DuolingoDataCopyService } from "./duolingoDataCopy.service";
import { DuolingoDataCopyController } from "./duolingoDataCopy.controller";
import { DuolingoDataCopyResolver } from "./duolingoDataCopy.resolver";

@Module({
  imports: [DuolingoDataCopyModuleBase],
  controllers: [DuolingoDataCopyController],
  providers: [DuolingoDataCopyService, DuolingoDataCopyResolver],
  exports: [DuolingoDataCopyService],
})
export class DuolingoDataCopyModule {}
