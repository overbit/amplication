import { Module } from "@nestjs/common";
import { GmatscoreModuleBase } from "./base/gmatscore.module.base";
import { GmatscoreService } from "./gmatscore.service";
import { GmatscoreController } from "./gmatscore.controller";
import { GmatscoreResolver } from "./gmatscore.resolver";

@Module({
  imports: [GmatscoreModuleBase],
  controllers: [GmatscoreController],
  providers: [GmatscoreService, GmatscoreResolver],
  exports: [GmatscoreService],
})
export class GmatscoreModule {}
