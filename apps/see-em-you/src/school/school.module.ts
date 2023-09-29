import { Module } from "@nestjs/common";
import { SchoolModuleBase } from "./base/school.module.base";
import { SchoolService } from "./school.service";
import { SchoolController } from "./school.controller";
import { SchoolResolver } from "./school.resolver";

@Module({
  imports: [SchoolModuleBase],
  controllers: [SchoolController],
  providers: [SchoolService, SchoolResolver],
  exports: [SchoolService],
})
export class SchoolModule {}
