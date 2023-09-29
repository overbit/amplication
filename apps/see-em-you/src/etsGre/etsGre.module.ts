import { Module } from "@nestjs/common";
import { EtsGreModuleBase } from "./base/etsGre.module.base";
import { EtsGreService } from "./etsGre.service";
import { EtsGreController } from "./etsGre.controller";
import { EtsGreResolver } from "./etsGre.resolver";

@Module({
  imports: [EtsGreModuleBase],
  controllers: [EtsGreController],
  providers: [EtsGreService, EtsGreResolver],
  exports: [EtsGreService],
})
export class EtsGreModule {}
