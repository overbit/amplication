import { Module } from "@nestjs/common";
import { PositiveFactorModuleBase } from "./base/positiveFactor.module.base";
import { PositiveFactorService } from "./positiveFactor.service";
import { PositiveFactorController } from "./positiveFactor.controller";
import { PositiveFactorResolver } from "./positiveFactor.resolver";

@Module({
  imports: [PositiveFactorModuleBase],
  controllers: [PositiveFactorController],
  providers: [PositiveFactorService, PositiveFactorResolver],
  exports: [PositiveFactorService],
})
export class PositiveFactorModule {}
