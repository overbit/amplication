import { Module } from "@nestjs/common";
import { VideoEssayModuleBase } from "./base/videoEssay.module.base";
import { VideoEssayService } from "./videoEssay.service";
import { VideoEssayController } from "./videoEssay.controller";
import { VideoEssayResolver } from "./videoEssay.resolver";

@Module({
  imports: [VideoEssayModuleBase],
  controllers: [VideoEssayController],
  providers: [VideoEssayService, VideoEssayResolver],
  exports: [VideoEssayService],
})
export class VideoEssayModule {}
