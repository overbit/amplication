import { Module } from "@nestjs/common";
import { MitsSlateSuppinfoModuleBase } from "./base/mitsSlateSuppinfo.module.base";
import { MitsSlateSuppinfoService } from "./mitsSlateSuppinfo.service";
import { MitsSlateSuppinfoController } from "./mitsSlateSuppinfo.controller";
import { MitsSlateSuppinfoResolver } from "./mitsSlateSuppinfo.resolver";

@Module({
  imports: [MitsSlateSuppinfoModuleBase],
  controllers: [MitsSlateSuppinfoController],
  providers: [MitsSlateSuppinfoService, MitsSlateSuppinfoResolver],
  exports: [MitsSlateSuppinfoService],
})
export class MitsSlateSuppinfoModule {}
