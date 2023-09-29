import { Module } from "@nestjs/common";
import { GrescoreModuleBase } from "./base/grescore.module.base";
import { GrescoreService } from "./grescore.service";
import { GrescoreController } from "./grescore.controller";
import { GrescoreResolver } from "./grescore.resolver";

@Module({
  imports: [GrescoreModuleBase],
  controllers: [GrescoreController],
  providers: [GrescoreService, GrescoreResolver],
  exports: [GrescoreService],
})
export class GrescoreModule {}
