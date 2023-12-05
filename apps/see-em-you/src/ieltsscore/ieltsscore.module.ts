import { Module } from "@nestjs/common";
import { IeltsscoreModuleBase } from "./base/ieltsscore.module.base";
import { IeltsscoreService } from "./ieltsscore.service";
import { IeltsscoreController } from "./ieltsscore.controller";
import { IeltsscoreResolver } from "./ieltsscore.resolver";

@Module({
  imports: [IeltsscoreModuleBase],
  controllers: [IeltsscoreController],
  providers: [IeltsscoreService, IeltsscoreResolver],
  exports: [IeltsscoreService],
})
export class IeltsscoreModule {}
