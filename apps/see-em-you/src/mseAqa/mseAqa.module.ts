import { Module } from "@nestjs/common";
import { MseAqaModuleBase } from "./base/mseAqa.module.base";
import { MseAqaService } from "./mseAqa.service";
import { MseAqaController } from "./mseAqa.controller";
import { MseAqaResolver } from "./mseAqa.resolver";

@Module({
  imports: [MseAqaModuleBase],
  controllers: [MseAqaController],
  providers: [MseAqaService, MseAqaResolver],
  exports: [MseAqaService],
})
export class MseAqaModule {}
