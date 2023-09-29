import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { VideoEssayServiceBase } from "./base/videoEssay.service.base";

@Injectable()
export class VideoEssayService extends VideoEssayServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
