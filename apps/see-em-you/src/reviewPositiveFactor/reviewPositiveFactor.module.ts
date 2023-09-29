import { Module } from "@nestjs/common";
import { ReviewPositiveFactorModuleBase } from "./base/reviewPositiveFactor.module.base";
import { ReviewPositiveFactorService } from "./reviewPositiveFactor.service";
import { ReviewPositiveFactorController } from "./reviewPositiveFactor.controller";
import { ReviewPositiveFactorResolver } from "./reviewPositiveFactor.resolver";

@Module({
  imports: [ReviewPositiveFactorModuleBase],
  controllers: [ReviewPositiveFactorController],
  providers: [ReviewPositiveFactorService, ReviewPositiveFactorResolver],
  exports: [ReviewPositiveFactorService],
})
export class ReviewPositiveFactorModule {}
