import { Module } from "@nestjs/common";
import { MseCodilityModuleBase } from "./base/mseCodility.module.base";
import { MseCodilityService } from "./mseCodility.service";
import { MseCodilityController } from "./mseCodility.controller";
import { MseCodilityResolver } from "./mseCodility.resolver";

@Module({
  imports: [MseCodilityModuleBase],
  controllers: [MseCodilityController],
  providers: [MseCodilityService, MseCodilityResolver],
  exports: [MseCodilityService],
})
export class MseCodilityModule {}
