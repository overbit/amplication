import { Module } from "@nestjs/common";
import { ApplicantIpedsRaceModuleBase } from "./base/applicantIpedsRace.module.base";
import { ApplicantIpedsRaceService } from "./applicantIpedsRace.service";
import { ApplicantIpedsRaceController } from "./applicantIpedsRace.controller";
import { ApplicantIpedsRaceResolver } from "./applicantIpedsRace.resolver";

@Module({
  imports: [ApplicantIpedsRaceModuleBase],
  controllers: [ApplicantIpedsRaceController],
  providers: [ApplicantIpedsRaceService, ApplicantIpedsRaceResolver],
  exports: [ApplicantIpedsRaceService],
})
export class ApplicantIpedsRaceModule {}
