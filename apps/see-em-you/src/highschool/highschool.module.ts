import { Module } from "@nestjs/common";
import { HighschoolModuleBase } from "./base/highschool.module.base";
import { HighschoolService } from "./highschool.service";
import { HighschoolController } from "./highschool.controller";
import { HighschoolResolver } from "./highschool.resolver";

@Module({
  imports: [HighschoolModuleBase],
  controllers: [HighschoolController],
  providers: [HighschoolService, HighschoolResolver],
  exports: [HighschoolService],
})
export class HighschoolModule {}
