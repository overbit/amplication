import { Module } from "@nestjs/common";
import { DuolingoDatumModuleBase } from "./base/duolingoDatum.module.base";
import { DuolingoDatumService } from "./duolingoDatum.service";
import { DuolingoDatumController } from "./duolingoDatum.controller";
import { DuolingoDatumResolver } from "./duolingoDatum.resolver";

@Module({
  imports: [DuolingoDatumModuleBase],
  controllers: [DuolingoDatumController],
  providers: [DuolingoDatumService, DuolingoDatumResolver],
  exports: [DuolingoDatumService],
})
export class DuolingoDatumModule {}
