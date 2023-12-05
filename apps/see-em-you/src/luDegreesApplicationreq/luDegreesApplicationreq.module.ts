import { Module } from "@nestjs/common";
import { LuDegreesApplicationreqModuleBase } from "./base/luDegreesApplicationreq.module.base";
import { LuDegreesApplicationreqService } from "./luDegreesApplicationreq.service";
import { LuDegreesApplicationreqController } from "./luDegreesApplicationreq.controller";
import { LuDegreesApplicationreqResolver } from "./luDegreesApplicationreq.resolver";

@Module({
  imports: [LuDegreesApplicationreqModuleBase],
  controllers: [LuDegreesApplicationreqController],
  providers: [LuDegreesApplicationreqService, LuDegreesApplicationreqResolver],
  exports: [LuDegreesApplicationreqService],
})
export class LuDegreesApplicationreqModule {}
