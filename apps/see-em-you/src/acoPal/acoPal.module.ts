import { Module } from "@nestjs/common";
import { AcoPalModuleBase } from "./base/acoPal.module.base";
import { AcoPalService } from "./acoPal.service";
import { AcoPalController } from "./acoPal.controller";
import { AcoPalResolver } from "./acoPal.resolver";

@Module({
  imports: [AcoPalModuleBase],
  controllers: [AcoPalController],
  providers: [AcoPalService, AcoPalResolver],
  exports: [AcoPalService],
})
export class AcoPalModule {}
