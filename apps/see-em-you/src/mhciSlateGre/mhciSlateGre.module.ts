import { Module } from "@nestjs/common";
import { MhciSlateGreModuleBase } from "./base/mhciSlateGre.module.base";
import { MhciSlateGreService } from "./mhciSlateGre.service";
import { MhciSlateGreController } from "./mhciSlateGre.controller";
import { MhciSlateGreResolver } from "./mhciSlateGre.resolver";

@Module({
  imports: [MhciSlateGreModuleBase],
  controllers: [MhciSlateGreController],
  providers: [MhciSlateGreService, MhciSlateGreResolver],
  exports: [MhciSlateGreService],
})
export class MhciSlateGreModule {}
