import { Module } from "@nestjs/common";
import { SlateEmployModuleBase } from "./base/slateEmploy.module.base";
import { SlateEmployService } from "./slateEmploy.service";
import { SlateEmployController } from "./slateEmploy.controller";
import { SlateEmployResolver } from "./slateEmploy.resolver";

@Module({
  imports: [SlateEmployModuleBase],
  controllers: [SlateEmployController],
  providers: [SlateEmployService, SlateEmployResolver],
  exports: [SlateEmployService],
})
export class SlateEmployModule {}
