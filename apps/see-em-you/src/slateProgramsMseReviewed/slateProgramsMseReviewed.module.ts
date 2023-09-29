import { Module } from "@nestjs/common";
import { SlateProgramsMseReviewedModuleBase } from "./base/slateProgramsMseReviewed.module.base";
import { SlateProgramsMseReviewedService } from "./slateProgramsMseReviewed.service";
import { SlateProgramsMseReviewedController } from "./slateProgramsMseReviewed.controller";
import { SlateProgramsMseReviewedResolver } from "./slateProgramsMseReviewed.resolver";

@Module({
  imports: [SlateProgramsMseReviewedModuleBase],
  controllers: [SlateProgramsMseReviewedController],
  providers: [
    SlateProgramsMseReviewedService,
    SlateProgramsMseReviewedResolver,
  ],
  exports: [SlateProgramsMseReviewedService],
})
export class SlateProgramsMseReviewedModule {}
