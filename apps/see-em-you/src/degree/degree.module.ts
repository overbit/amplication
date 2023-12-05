import { Module } from "@nestjs/common";
import { DegreeModuleBase } from "./base/degree.module.base";
import { DegreeService } from "./degree.service";
import { DegreeController } from "./degree.controller";
import { DegreeResolver } from "./degree.resolver";

@Module({
  imports: [DegreeModuleBase],
  controllers: [DegreeController],
  providers: [DegreeService, DegreeResolver],
  exports: [DegreeService],
})
export class DegreeModule {}
