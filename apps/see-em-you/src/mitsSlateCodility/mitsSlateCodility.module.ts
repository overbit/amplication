import { Module } from "@nestjs/common";
import { MitsSlateCodilityModuleBase } from "./base/mitsSlateCodility.module.base";
import { MitsSlateCodilityService } from "./mitsSlateCodility.service";
import { MitsSlateCodilityController } from "./mitsSlateCodility.controller";
import { MitsSlateCodilityResolver } from "./mitsSlateCodility.resolver";

@Module({
  imports: [MitsSlateCodilityModuleBase],
  controllers: [MitsSlateCodilityController],
  providers: [MitsSlateCodilityService, MitsSlateCodilityResolver],
  exports: [MitsSlateCodilityService],
})
export class MitsSlateCodilityModule {}
