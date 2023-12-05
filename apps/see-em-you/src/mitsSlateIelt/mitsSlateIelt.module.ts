import { Module } from "@nestjs/common";
import { MitsSlateIeltModuleBase } from "./base/mitsSlateIelt.module.base";
import { MitsSlateIeltService } from "./mitsSlateIelt.service";
import { MitsSlateIeltController } from "./mitsSlateIelt.controller";
import { MitsSlateIeltResolver } from "./mitsSlateIelt.resolver";

@Module({
  imports: [MitsSlateIeltModuleBase],
  controllers: [MitsSlateIeltController],
  providers: [MitsSlateIeltService, MitsSlateIeltResolver],
  exports: [MitsSlateIeltService],
})
export class MitsSlateIeltModule {}
