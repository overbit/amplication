import { Module } from "@nestjs/common";
import { LuReviewInterestModuleBase } from "./base/luReviewInterest.module.base";
import { LuReviewInterestService } from "./luReviewInterest.service";
import { LuReviewInterestController } from "./luReviewInterest.controller";
import { LuReviewInterestResolver } from "./luReviewInterest.resolver";

@Module({
  imports: [LuReviewInterestModuleBase],
  controllers: [LuReviewInterestController],
  providers: [LuReviewInterestService, LuReviewInterestResolver],
  exports: [LuReviewInterestService],
})
export class LuReviewInterestModule {}
