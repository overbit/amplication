import { Module } from "@nestjs/common";
import { LuProgramsApplicationreqModuleBase } from "./base/luProgramsApplicationreq.module.base";
import { LuProgramsApplicationreqService } from "./luProgramsApplicationreq.service";
import { LuProgramsApplicationreqController } from "./luProgramsApplicationreq.controller";
import { LuProgramsApplicationreqResolver } from "./luProgramsApplicationreq.resolver";

@Module({
  imports: [LuProgramsApplicationreqModuleBase],
  controllers: [LuProgramsApplicationreqController],
  providers: [
    LuProgramsApplicationreqService,
    LuProgramsApplicationreqResolver,
  ],
  exports: [LuProgramsApplicationreqService],
})
export class LuProgramsApplicationreqModule {}
