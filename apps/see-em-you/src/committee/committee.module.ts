import { Module } from "@nestjs/common";
import { CommitteeModuleBase } from "./base/committee.module.base";
import { CommitteeService } from "./committee.service";
import { CommitteeController } from "./committee.controller";
import { CommitteeResolver } from "./committee.resolver";

@Module({
  imports: [CommitteeModuleBase],
  controllers: [CommitteeController],
  providers: [CommitteeService, CommitteeResolver],
  exports: [CommitteeService],
})
export class CommitteeModule {}
