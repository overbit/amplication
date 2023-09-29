import { Module } from "@nestjs/common";
import { SlateIeltModuleBase } from "./base/slateIelt.module.base";
import { SlateIeltService } from "./slateIelt.service";
import { SlateIeltController } from "./slateIelt.controller";
import { SlateIeltResolver } from "./slateIelt.resolver";

@Module({
  imports: [SlateIeltModuleBase],
  controllers: [SlateIeltController],
  providers: [SlateIeltService, SlateIeltResolver],
  exports: [SlateIeltService],
})
export class SlateIeltModule {}
