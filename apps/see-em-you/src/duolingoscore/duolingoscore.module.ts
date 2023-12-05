import { Module } from "@nestjs/common";
import { DuolingoscoreModuleBase } from "./base/duolingoscore.module.base";
import { DuolingoscoreService } from "./duolingoscore.service";
import { DuolingoscoreController } from "./duolingoscore.controller";
import { DuolingoscoreResolver } from "./duolingoscore.resolver";

@Module({
  imports: [DuolingoscoreModuleBase],
  controllers: [DuolingoscoreController],
  providers: [DuolingoscoreService, DuolingoscoreResolver],
  exports: [DuolingoscoreService],
})
export class DuolingoscoreModule {}
