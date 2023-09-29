import { Module } from "@nestjs/common";
import { EtsConfigModuleBase } from "./base/etsConfig.module.base";
import { EtsConfigService } from "./etsConfig.service";
import { EtsConfigController } from "./etsConfig.controller";
import { EtsConfigResolver } from "./etsConfig.resolver";

@Module({
  imports: [EtsConfigModuleBase],
  controllers: [EtsConfigController],
  providers: [EtsConfigService, EtsConfigResolver],
  exports: [EtsConfigService],
})
export class EtsConfigModule {}
