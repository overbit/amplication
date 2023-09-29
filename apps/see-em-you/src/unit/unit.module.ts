import { Module } from "@nestjs/common";
import { UnitModuleBase } from "./base/unit.module.base";
import { UnitService } from "./unit.service";
import { UnitController } from "./unit.controller";
import { UnitResolver } from "./unit.resolver";

@Module({
  imports: [UnitModuleBase],
  controllers: [UnitController],
  providers: [UnitService, UnitResolver],
  exports: [UnitService],
})
export class UnitModule {}
