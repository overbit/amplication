import { Module } from "@nestjs/common";
import { DietrichDiversityModuleBase } from "./base/dietrichDiversity.module.base";
import { DietrichDiversityService } from "./dietrichDiversity.service";
import { DietrichDiversityController } from "./dietrichDiversity.controller";
import { DietrichDiversityResolver } from "./dietrichDiversity.resolver";

@Module({
  imports: [DietrichDiversityModuleBase],
  controllers: [DietrichDiversityController],
  providers: [DietrichDiversityService, DietrichDiversityResolver],
  exports: [DietrichDiversityService],
})
export class DietrichDiversityModule {}
