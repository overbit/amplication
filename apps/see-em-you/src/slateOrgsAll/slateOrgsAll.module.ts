import { Module } from "@nestjs/common";
import { SlateOrgsAllModuleBase } from "./base/slateOrgsAll.module.base";
import { SlateOrgsAllService } from "./slateOrgsAll.service";
import { SlateOrgsAllController } from "./slateOrgsAll.controller";
import { SlateOrgsAllResolver } from "./slateOrgsAll.resolver";

@Module({
  imports: [SlateOrgsAllModuleBase],
  controllers: [SlateOrgsAllController],
  providers: [SlateOrgsAllService, SlateOrgsAllResolver],
  exports: [SlateOrgsAllService],
})
export class SlateOrgsAllModule {}
