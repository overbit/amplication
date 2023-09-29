import * as graphql from "@nestjs/graphql";
import { VideoEssayResolverBase } from "./base/videoEssay.resolver.base";
import { VideoEssay } from "./base/VideoEssay";
import { VideoEssayService } from "./videoEssay.service";

@graphql.Resolver(() => VideoEssay)
export class VideoEssayResolver extends VideoEssayResolverBase {
  constructor(protected readonly service: VideoEssayService) {
    super(service);
  }
}
