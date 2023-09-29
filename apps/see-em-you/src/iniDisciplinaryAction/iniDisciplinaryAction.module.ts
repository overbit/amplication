import { Module } from "@nestjs/common";
import { IniDisciplinaryActionModuleBase } from "./base/iniDisciplinaryAction.module.base";
import { IniDisciplinaryActionService } from "./iniDisciplinaryAction.service";
import { IniDisciplinaryActionController } from "./iniDisciplinaryAction.controller";
import { IniDisciplinaryActionResolver } from "./iniDisciplinaryAction.resolver";

@Module({
  imports: [IniDisciplinaryActionModuleBase],
  controllers: [IniDisciplinaryActionController],
  providers: [IniDisciplinaryActionService, IniDisciplinaryActionResolver],
  exports: [IniDisciplinaryActionService],
})
export class IniDisciplinaryActionModule {}
