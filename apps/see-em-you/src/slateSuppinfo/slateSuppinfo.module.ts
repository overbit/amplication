import { Module } from "@nestjs/common";
import { SlateSuppinfoModuleBase } from "./base/slateSuppinfo.module.base";
import { SlateSuppinfoService } from "./slateSuppinfo.service";
import { SlateSuppinfoController } from "./slateSuppinfo.controller";
import { SlateSuppinfoResolver } from "./slateSuppinfo.resolver";

@Module({
  imports: [SlateSuppinfoModuleBase],
  controllers: [SlateSuppinfoController],
  providers: [SlateSuppinfoService, SlateSuppinfoResolver],
  exports: [SlateSuppinfoService],
})
export class SlateSuppinfoModule {}
