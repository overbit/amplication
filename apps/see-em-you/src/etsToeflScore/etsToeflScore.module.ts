import { Module } from "@nestjs/common";
import { EtsToeflScoreModuleBase } from "./base/etsToeflScore.module.base";
import { EtsToeflScoreService } from "./etsToeflScore.service";
import { EtsToeflScoreController } from "./etsToeflScore.controller";
import { EtsToeflScoreResolver } from "./etsToeflScore.resolver";

@Module({
  imports: [EtsToeflScoreModuleBase],
  controllers: [EtsToeflScoreController],
  providers: [EtsToeflScoreService, EtsToeflScoreResolver],
  exports: [EtsToeflScoreService],
})
export class EtsToeflScoreModule {}
