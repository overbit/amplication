import { Module } from "@nestjs/common";
import { JiravoteModuleBase } from "./base/jiravote.module.base";
import { JiravoteService } from "./jiravote.service";
import { JiravoteController } from "./jiravote.controller";
import { JiravoteResolver } from "./jiravote.resolver";

@Module({
  imports: [JiravoteModuleBase],
  controllers: [JiravoteController],
  providers: [JiravoteService, JiravoteResolver],
  exports: [JiravoteService],
})
export class JiravoteModule {}
