import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { VideoEssayService } from "./videoEssay.service";
import { VideoEssayControllerBase } from "./base/videoEssay.controller.base";

@swagger.ApiTags("videoEssays")
@common.Controller("videoEssays")
export class VideoEssayController extends VideoEssayControllerBase {
  constructor(protected readonly service: VideoEssayService) {
    super(service);
  }
}
