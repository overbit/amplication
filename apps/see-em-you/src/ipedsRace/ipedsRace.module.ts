import { Module } from "@nestjs/common";
import { IpedsRaceModuleBase } from "./base/ipedsRace.module.base";
import { IpedsRaceService } from "./ipedsRace.service";
import { IpedsRaceController } from "./ipedsRace.controller";
import { IpedsRaceResolver } from "./ipedsRace.resolver";

@Module({
  imports: [IpedsRaceModuleBase],
  controllers: [IpedsRaceController],
  providers: [IpedsRaceService, IpedsRaceResolver],
  exports: [IpedsRaceService],
})
export class IpedsRaceModule {}
