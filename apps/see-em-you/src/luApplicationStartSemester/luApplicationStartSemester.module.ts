import { Module } from "@nestjs/common";
import { LuApplicationStartSemesterModuleBase } from "./base/luApplicationStartSemester.module.base";
import { LuApplicationStartSemesterService } from "./luApplicationStartSemester.service";
import { LuApplicationStartSemesterController } from "./luApplicationStartSemester.controller";
import { LuApplicationStartSemesterResolver } from "./luApplicationStartSemester.resolver";

@Module({
  imports: [LuApplicationStartSemesterModuleBase],
  controllers: [LuApplicationStartSemesterController],
  providers: [
    LuApplicationStartSemesterService,
    LuApplicationStartSemesterResolver,
  ],
  exports: [LuApplicationStartSemesterService],
})
export class LuApplicationStartSemesterModule {}
