import { Module } from "@nestjs/common";
import { SlateCodilityModuleBase } from "./base/slateCodility.module.base";
import { SlateCodilityService } from "./slateCodility.service";
import { SlateCodilityController } from "./slateCodility.controller";
import { SlateCodilityResolver } from "./slateCodility.resolver";

@Module({
  imports: [SlateCodilityModuleBase],
  controllers: [SlateCodilityController],
  providers: [SlateCodilityService, SlateCodilityResolver],
  exports: [SlateCodilityService],
})
export class SlateCodilityModule {}
