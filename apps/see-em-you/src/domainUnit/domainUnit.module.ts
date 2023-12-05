import { Module } from "@nestjs/common";
import { DomainUnitModuleBase } from "./base/domainUnit.module.base";
import { DomainUnitService } from "./domainUnit.service";
import { DomainUnitController } from "./domainUnit.controller";
import { DomainUnitResolver } from "./domainUnit.resolver";

@Module({
  imports: [DomainUnitModuleBase],
  controllers: [DomainUnitController],
  providers: [DomainUnitService, DomainUnitResolver],
  exports: [DomainUnitService],
})
export class DomainUnitModule {}
