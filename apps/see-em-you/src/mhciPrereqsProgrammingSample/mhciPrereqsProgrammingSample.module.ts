import { Module } from "@nestjs/common";
import { MhciPrereqsProgrammingSampleModuleBase } from "./base/mhciPrereqsProgrammingSample.module.base";
import { MhciPrereqsProgrammingSampleService } from "./mhciPrereqsProgrammingSample.service";
import { MhciPrereqsProgrammingSampleController } from "./mhciPrereqsProgrammingSample.controller";
import { MhciPrereqsProgrammingSampleResolver } from "./mhciPrereqsProgrammingSample.resolver";

@Module({
  imports: [MhciPrereqsProgrammingSampleModuleBase],
  controllers: [MhciPrereqsProgrammingSampleController],
  providers: [
    MhciPrereqsProgrammingSampleService,
    MhciPrereqsProgrammingSampleResolver,
  ],
  exports: [MhciPrereqsProgrammingSampleService],
})
export class MhciPrereqsProgrammingSampleModule {}
