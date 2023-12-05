import { Module } from "@nestjs/common";
import { DietrichRecognitionModuleBase } from "./base/dietrichRecognition.module.base";
import { DietrichRecognitionService } from "./dietrichRecognition.service";
import { DietrichRecognitionController } from "./dietrichRecognition.controller";
import { DietrichRecognitionResolver } from "./dietrichRecognition.resolver";

@Module({
  imports: [DietrichRecognitionModuleBase],
  controllers: [DietrichRecognitionController],
  providers: [DietrichRecognitionService, DietrichRecognitionResolver],
  exports: [DietrichRecognitionService],
})
export class DietrichRecognitionModule {}
