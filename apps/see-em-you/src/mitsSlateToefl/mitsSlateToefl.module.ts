import { Module } from "@nestjs/common";
import { MitsSlateToeflModuleBase } from "./base/mitsSlateToefl.module.base";
import { MitsSlateToeflService } from "./mitsSlateToefl.service";
import { MitsSlateToeflController } from "./mitsSlateToefl.controller";
import { MitsSlateToeflResolver } from "./mitsSlateToefl.resolver";

@Module({
  imports: [MitsSlateToeflModuleBase],
  controllers: [MitsSlateToeflController],
  providers: [MitsSlateToeflService, MitsSlateToeflResolver],
  exports: [MitsSlateToeflService],
})
export class MitsSlateToeflModule {}
