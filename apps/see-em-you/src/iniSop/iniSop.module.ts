import { Module } from "@nestjs/common";
import { IniSopModuleBase } from "./base/iniSop.module.base";
import { IniSopService } from "./iniSop.service";
import { IniSopController } from "./iniSop.controller";
import { IniSopResolver } from "./iniSop.resolver";

@Module({
  imports: [IniSopModuleBase],
  controllers: [IniSopController],
  providers: [IniSopService, IniSopResolver],
  exports: [IniSopService],
})
export class IniSopModule {}
