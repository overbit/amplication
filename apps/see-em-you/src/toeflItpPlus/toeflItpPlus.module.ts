import { Module } from "@nestjs/common";
import { ToeflItpPlusModuleBase } from "./base/toeflItpPlus.module.base";
import { ToeflItpPlusService } from "./toeflItpPlus.service";
import { ToeflItpPlusController } from "./toeflItpPlus.controller";
import { ToeflItpPlusResolver } from "./toeflItpPlus.resolver";

@Module({
  imports: [ToeflItpPlusModuleBase],
  controllers: [ToeflItpPlusController],
  providers: [ToeflItpPlusService, ToeflItpPlusResolver],
  exports: [ToeflItpPlusService],
})
export class ToeflItpPlusModule {}
