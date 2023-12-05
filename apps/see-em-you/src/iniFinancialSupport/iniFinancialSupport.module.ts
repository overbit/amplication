import { Module } from "@nestjs/common";
import { IniFinancialSupportModuleBase } from "./base/iniFinancialSupport.module.base";
import { IniFinancialSupportService } from "./iniFinancialSupport.service";
import { IniFinancialSupportController } from "./iniFinancialSupport.controller";
import { IniFinancialSupportResolver } from "./iniFinancialSupport.resolver";

@Module({
  imports: [IniFinancialSupportModuleBase],
  controllers: [IniFinancialSupportController],
  providers: [IniFinancialSupportService, IniFinancialSupportResolver],
  exports: [IniFinancialSupportService],
})
export class IniFinancialSupportModule {}
