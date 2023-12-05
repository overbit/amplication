import { Module } from "@nestjs/common";
import { SlateAppModuleBase } from "./base/slateApp.module.base";
import { SlateAppService } from "./slateApp.service";
import { SlateAppController } from "./slateApp.controller";
import { SlateAppResolver } from "./slateApp.resolver";

@Module({
  imports: [SlateAppModuleBase],
  controllers: [SlateAppController],
  providers: [SlateAppService, SlateAppResolver],
  exports: [SlateAppService],
})
export class SlateAppModule {}
