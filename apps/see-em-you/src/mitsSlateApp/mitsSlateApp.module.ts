import { Module } from "@nestjs/common";
import { MitsSlateAppModuleBase } from "./base/mitsSlateApp.module.base";
import { MitsSlateAppService } from "./mitsSlateApp.service";
import { MitsSlateAppController } from "./mitsSlateApp.controller";
import { MitsSlateAppResolver } from "./mitsSlateApp.resolver";

@Module({
  imports: [MitsSlateAppModuleBase],
  controllers: [MitsSlateAppController],
  providers: [MitsSlateAppService, MitsSlateAppResolver],
  exports: [MitsSlateAppService],
})
export class MitsSlateAppModule {}
