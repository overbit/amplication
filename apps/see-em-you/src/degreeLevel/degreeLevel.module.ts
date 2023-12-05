import { Module } from "@nestjs/common";
import { DegreeLevelModuleBase } from "./base/degreeLevel.module.base";
import { DegreeLevelService } from "./degreeLevel.service";
import { DegreeLevelController } from "./degreeLevel.controller";
import { DegreeLevelResolver } from "./degreeLevel.resolver";

@Module({
  imports: [DegreeLevelModuleBase],
  controllers: [DegreeLevelController],
  providers: [DegreeLevelService, DegreeLevelResolver],
  exports: [DegreeLevelService],
})
export class DegreeLevelModule {}
