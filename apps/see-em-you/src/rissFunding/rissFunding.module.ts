import { Module } from "@nestjs/common";
import { RissFundingModuleBase } from "./base/rissFunding.module.base";
import { RissFundingService } from "./rissFunding.service";
import { RissFundingController } from "./rissFunding.controller";
import { RissFundingResolver } from "./rissFunding.resolver";

@Module({
  imports: [RissFundingModuleBase],
  controllers: [RissFundingController],
  providers: [RissFundingService, RissFundingResolver],
  exports: [RissFundingService],
})
export class RissFundingModule {}
