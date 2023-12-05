import { Module } from "@nestjs/common";
import { SpecialConsiderationModuleBase } from "./base/specialConsideration.module.base";
import { SpecialConsiderationService } from "./specialConsideration.service";
import { SpecialConsiderationController } from "./specialConsideration.controller";
import { SpecialConsiderationResolver } from "./specialConsideration.resolver";

@Module({
  imports: [SpecialConsiderationModuleBase],
  controllers: [SpecialConsiderationController],
  providers: [SpecialConsiderationService, SpecialConsiderationResolver],
  exports: [SpecialConsiderationService],
})
export class SpecialConsiderationModule {}
