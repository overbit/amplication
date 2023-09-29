import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SlateRecommendServiceBase } from "./base/slateRecommend.service.base";

@Injectable()
export class SlateRecommendService extends SlateRecommendServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
