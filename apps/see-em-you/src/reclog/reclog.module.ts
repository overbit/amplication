import { Module } from "@nestjs/common";
import { ReclogModuleBase } from "./base/reclog.module.base";
import { ReclogService } from "./reclog.service";
import { ReclogController } from "./reclog.controller";
import { ReclogResolver } from "./reclog.resolver";

@Module({
  imports: [ReclogModuleBase],
  controllers: [ReclogController],
  providers: [ReclogService, ReclogResolver],
  exports: [ReclogService],
})
export class ReclogModule {}
