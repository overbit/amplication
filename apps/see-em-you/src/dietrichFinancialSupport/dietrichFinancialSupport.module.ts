import { Module } from "@nestjs/common";
import { DietrichFinancialSupportModuleBase } from "./base/dietrichFinancialSupport.module.base";
import { DietrichFinancialSupportService } from "./dietrichFinancialSupport.service";
import { DietrichFinancialSupportController } from "./dietrichFinancialSupport.controller";
import { DietrichFinancialSupportResolver } from "./dietrichFinancialSupport.resolver";

@Module({
  imports: [DietrichFinancialSupportModuleBase],
  controllers: [DietrichFinancialSupportController],
  providers: [
    DietrichFinancialSupportService,
    DietrichFinancialSupportResolver,
  ],
  exports: [DietrichFinancialSupportService],
})
export class DietrichFinancialSupportModule {}
