import { Module } from "@nestjs/common";
import { PeSlateAppModuleBase } from "./base/peSlateApp.module.base";
import { PeSlateAppService } from "./peSlateApp.service";
import { PeSlateAppController } from "./peSlateApp.controller";
import { PeSlateAppResolver } from "./peSlateApp.resolver";

@Module({
  imports: [PeSlateAppModuleBase],
  controllers: [PeSlateAppController],
  providers: [PeSlateAppService, PeSlateAppResolver],
  exports: [PeSlateAppService],
})
export class PeSlateAppModule {}
