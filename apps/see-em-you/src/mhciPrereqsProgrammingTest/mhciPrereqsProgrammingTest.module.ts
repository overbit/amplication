import { Module } from "@nestjs/common";
import { MhciPrereqsProgrammingTestModuleBase } from "./base/mhciPrereqsProgrammingTest.module.base";
import { MhciPrereqsProgrammingTestService } from "./mhciPrereqsProgrammingTest.service";
import { MhciPrereqsProgrammingTestController } from "./mhciPrereqsProgrammingTest.controller";
import { MhciPrereqsProgrammingTestResolver } from "./mhciPrereqsProgrammingTest.resolver";

@Module({
  imports: [MhciPrereqsProgrammingTestModuleBase],
  controllers: [MhciPrereqsProgrammingTestController],
  providers: [
    MhciPrereqsProgrammingTestService,
    MhciPrereqsProgrammingTestResolver,
  ],
  exports: [MhciPrereqsProgrammingTestService],
})
export class MhciPrereqsProgrammingTestModule {}
