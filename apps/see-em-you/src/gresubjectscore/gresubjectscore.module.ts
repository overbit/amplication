import { Module } from "@nestjs/common";
import { GresubjectscoreModuleBase } from "./base/gresubjectscore.module.base";
import { GresubjectscoreService } from "./gresubjectscore.service";
import { GresubjectscoreController } from "./gresubjectscore.controller";
import { GresubjectscoreResolver } from "./gresubjectscore.resolver";

@Module({
  imports: [GresubjectscoreModuleBase],
  controllers: [GresubjectscoreController],
  providers: [GresubjectscoreService, GresubjectscoreResolver],
  exports: [GresubjectscoreService],
})
export class GresubjectscoreModule {}
