import { Module } from "@nestjs/common";
import { ReviewPositiveFactorOtherModuleBase } from "./base/reviewPositiveFactorOther.module.base";
import { ReviewPositiveFactorOtherService } from "./reviewPositiveFactorOther.service";
import { ReviewPositiveFactorOtherController } from "./reviewPositiveFactorOther.controller";
import { ReviewPositiveFactorOtherResolver } from "./reviewPositiveFactorOther.resolver";

@Module({
  imports: [ReviewPositiveFactorOtherModuleBase],
  controllers: [ReviewPositiveFactorOtherController],
  providers: [
    ReviewPositiveFactorOtherService,
    ReviewPositiveFactorOtherResolver,
  ],
  exports: [ReviewPositiveFactorOtherService],
})
export class ReviewPositiveFactorOtherModule {}
