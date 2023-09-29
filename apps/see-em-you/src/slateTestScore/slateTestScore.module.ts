import { Module } from "@nestjs/common";
import { SlateTestScoreModuleBase } from "./base/slateTestScore.module.base";
import { SlateTestScoreService } from "./slateTestScore.service";
import { SlateTestScoreController } from "./slateTestScore.controller";
import { SlateTestScoreResolver } from "./slateTestScore.resolver";

@Module({
  imports: [SlateTestScoreModuleBase],
  controllers: [SlateTestScoreController],
  providers: [SlateTestScoreService, SlateTestScoreResolver],
  exports: [SlateTestScoreService],
})
export class SlateTestScoreModule {}
