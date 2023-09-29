import { Module } from "@nestjs/common";
import { DisabilityTypeModuleBase } from "./base/disabilityType.module.base";
import { DisabilityTypeService } from "./disabilityType.service";
import { DisabilityTypeController } from "./disabilityType.controller";
import { DisabilityTypeResolver } from "./disabilityType.resolver";

@Module({
  imports: [DisabilityTypeModuleBase],
  controllers: [DisabilityTypeController],
  providers: [DisabilityTypeService, DisabilityTypeResolver],
  exports: [DisabilityTypeService],
})
export class DisabilityTypeModule {}
