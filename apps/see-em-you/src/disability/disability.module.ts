import { Module } from "@nestjs/common";
import { DisabilityModuleBase } from "./base/disability.module.base";
import { DisabilityService } from "./disability.service";
import { DisabilityController } from "./disability.controller";
import { DisabilityResolver } from "./disability.resolver";

@Module({
  imports: [DisabilityModuleBase],
  controllers: [DisabilityController],
  providers: [DisabilityService, DisabilityResolver],
  exports: [DisabilityService],
})
export class DisabilityModule {}
